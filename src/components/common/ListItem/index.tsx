import SubInfo from "components/common/SubInfo";
import Tags from "components/common/Tags";
import {
  PostItemBlock,
  PostItemContent,
} from "components/posts/PostList.styled";
import { postT } from "types/post";

export default function ListItem({ post, handleMoveDetailPage }) {
  const { title, body, user, publishedDate, tags, _id }: postT = post;
  return (
    <PostItemBlock onClick={handleMoveDetailPage(_id)}>
      <div>
        <h1>{title}</h1>

        <PostItemContent dangerouslySetInnerHTML={{ __html: body }} />

        <Tags tags={tags} />
      </div>
      <SubInfo
        isMarginTop
        username={user?.username}
        publishedDate={new Date(publishedDate)}
      />
    </PostItemBlock>
  );
}
