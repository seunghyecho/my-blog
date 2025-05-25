import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQuery } from '@tanstack/react-query';
import PostViewer from 'components/post/PostViewer';
import PostActionButtons from 'components/post/PostActionButtons';
import { setOriginalPost } from 'modules/write';
import { fetchDeletePost, fetchReadPost } from 'lib/api/posts';
import { readPost, unloadPost } from 'modules/post';

function PostViewerContainer({ postId }){
  const dispatch = useDispatch();
  const router = useRouter();
  const {data, isLoading, isError}= useQuery(['detail'], ()=>fetchReadPost(postId))

  const { user } = useSelector(
    ({ user }) => ({
      user: user.user,
    }),
  );

  const post = data?.data;

  useEffect(() => {
    dispatch(readPost(postId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const deleteMutate = useMutation(
    () => fetchDeletePost((postId)),
    {
      onSuccess: () => {
        router.push('/');
      },
      onError: () => {
        alert('오류');
      },
    }
  );

  const onEdit = () =>{
    dispatch(setOriginalPost(post));
    router.push('/create');
  }

  const onRemove = () =>{
    if (deleteMutate.isLoading) return;
    deleteMutate.mutate();
  }
  
  const ownPost = (user && user?._id) == (post && post?.user?._id);

  return (
    <PostViewer 
      post={post} 
      loading={isLoading} 
      error={isError} 
      actionButtons={ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove}/>}
    />
  );
};

export default PostViewerContainer;
