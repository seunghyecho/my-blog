import client from "lib/api/client";
/**
 * 댓글 생성 api
 */
const fetchCreateComment = ({ content, postId }) => {
  return client.post(`/api/comments`, { postId, content });
};

/**
 * 댓글 조회 api
 */
const fetchReadComment = (id: string) => client.get(`/api/comments/${id}`);

export { fetchCreateComment, fetchReadComment };
