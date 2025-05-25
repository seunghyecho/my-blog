import { useState } from 'react';
import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet-async';
import { useMutation } from '@tanstack/react-query';
import TitleBodyBox from 'components/write/TitleBodyBox';
import ActionButtons from 'components/post/ActionButtons';
import TagBox from 'components/write/TagBox';
import { fetchCreatePost, fetchUpdatePost } from 'lib/api/posts';

interface prop{
  data?:any;
  postId?:string;
}
function Form({ data, postId }:prop) {
  const router = useRouter();
  const [title, setTitle]= useState( postId? data?.data.title : '' );
  const [body, setBody]= useState(postId?  data?.data.body : '');
  const [tags, setTags]= useState([]);
  
  const createMutation = useMutation(fetchCreatePost);
  const updateMutation = useMutation(fetchUpdatePost);

  const onPublish = () => {
    /**
     * 수정
     */
    if(postId){
      console.log("originalPostId",postId);
      updateMutation.mutate({
        id : postId,
        title,
        body,
        tags
      },{
        onSuccess:()=>{
          console.log('수정 성공');
          router.push('/');
        },
        onError:err=>{
          console.log('수정 오류',err)
        }
      })
      return;
    }
    /**
     * 등록
     */
    createMutation.mutate({
      title,
      body,
      tags
    },{
      onSuccess:()=>{
        console.log('등록 성공');
        router.push('/');
      },
      onError:err=>{
        console.log('등록 오류',err)
      }
    })

    setTitle('');
    setBody('');
    setTags([]);

  };

  const onCancel = () => {
    router.back();
  };

  const onChangeTags = nextTags => {
    setTags(nextTags)
  };

  const post = data?.data || '';

  return (
    <>
      <Helmet>
        <title>{postId? post.title : '새 글 작성하기'}</title>
      </Helmet>

      <TitleBodyBox
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
      />

      <TagBox
        onChangeTags={onChangeTags}
        tags={postId? post.tags : tags}
      />

      <ActionButtons 
        onPublish={onPublish} 
        onCancel={onCancel} 
        isEdit={!!postId}
      />
    </>

  );
}

export default Form;
