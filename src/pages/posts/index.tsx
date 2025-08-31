import { useRouter } from "next/router";
import styled from "styled-components";

import Responsive from "components/common/Responsive";
import CommentContainer from "containers/comment/CommentContainer";
import PostViewerContainer from "containers/post/PostViewerContainer";

const PostsBlock = styled(Responsive)`
  padding-bottom: 10rem;
`;
function Posts() {
  const router = useRouter();
  const { _id } = router.query;

  return (
    <PostsBlock>
      <PostViewerContainer postId={_id} />
      <CommentContainer postId={String(_id)} />
    </PostsBlock>
  );
}
export default Posts;
