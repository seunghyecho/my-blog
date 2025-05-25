import client from 'lib/api/client';

/**
 * 게시글 조회 api
 */
const fetchPosts = ({ page, username, tag }) => {
  return client.get(`/api/posts`, {
    params: {
      page,
      username,
      tag
    }
  });
};

/**
 * 게시글 상세 api
 */
const fetchReadPost = (id: number | string) => client.get(`/api/posts/${id}`);

/**
 * 게시글 생성 api
 */
const fetchCreatePost = ({ title, body, tags }) => {
  return client.post('/api/posts', { title, body, tags });
};

/**
 * 게시글 수정 api
 */
const fetchUpdatePost = ({ id, title, body, tags }) => {
  return client.patch(`api/posts/${id}`, {
    title,
    body,
    tags
  });
};

/**
 * 게시글 삭제 api
 */
const fetchDeletePost = (id: number | string) => {
  return client.delete(`api/posts/${id}`);
};

export {
  fetchPosts,
  fetchReadPost,
  fetchCreatePost,
  fetchUpdatePost,
  fetchDeletePost
};
