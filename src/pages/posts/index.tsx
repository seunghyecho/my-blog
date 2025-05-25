import styled from "styled-components";
import Responsive from "components/common/Responsive";
import CommentContainer from "containers/comment/CommentContainer";
import PostViewerContainer from "containers/post/PostViewerContainer";

const PostsBlock = styled(Responsive)`
  padding-bottom: 10rem;
`;
function Posts(){
    const id = window.localStorage.getItem('_id')
    return(
        <PostsBlock>
            <PostViewerContainer postId={id}/>
            <CommentContainer/>
        </PostsBlock>
    )
}
export default Posts;