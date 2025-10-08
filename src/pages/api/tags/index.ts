import client from "pages/api/client";

/**
 * 태그 조회 api
 */
const fetchTags = () => {
  return client.get('/api/tags');
};

/**
 * 태그 별 포스트 조회 api
 */
const fetchPostsByTag = ({ tag, page }: { tag: string, page: number }) => {
  return client.get(`/api/tags/${tag}/posts?page=${page}`);
};

export {fetchTags, fetchPostsByTag};