import client from 'lib/api/client';

const { NEXT_PUBLIC_API_KEY } = process.env;

const fetchNews = ({ params, category }) => {
  return client.get(
    `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${NEXT_PUBLIC_API_KEY}`,
    {
      params
    }
  );
};
export { fetchNews };
