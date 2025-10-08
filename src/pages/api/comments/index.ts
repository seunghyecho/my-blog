import client from "pages/api/client";
/**
 * 댓글 생성 api
 */
const fetchCreateComment = ({ content, postId }) => {
  return client.post(`/api/comments`, { postId, content });
};

/**
 * 댓글 조회 api
 */
const fetchReadComment = (id: string) => {
  return client.get(`/api/comments/${id}`);
}

/**
 * 댓글 삭제 api
 */
const fetchDeleteComment = (id: string) => {
  return client.delete(`/api/comments/${id}`);
}


/**
 * 댓글 수정 api
 */
const fetchUpdateComment = ({ id, content , postId})=>{
  return client.patch(`/api/comments/${id}`,{ postId, content });
}

export { 
  fetchCreateComment, 
  fetchReadComment,
  fetchDeleteComment, 
  fetchUpdateComment
};
