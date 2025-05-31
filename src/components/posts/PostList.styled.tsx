import styled from 'styled-components';
import palette from 'lib/styles/palette';

const PostListBlock = styled.ul`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PostItemBlock = styled.li`
  padding: 1.5rem;
  margin-bottom: 2rem;
  width: calc(100%/2 - 5px);
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  transition: all 0.2s ease-in-out;

  @media (max-width: 1024px) {
    width: calc(100% / 2);
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 1.25rem;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    line-height: 1.4;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
    
    &:hover {
      color: ${palette.gray[6]};
    }
  }

  .post-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    color: ${palette.gray[6]};
    font-size: 0.9rem;
  }

  .post-content {
    color: ${palette.gray[7]};
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .post-footer {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: ${palette.gray[6]};
    font-size: 0.9rem;
  }
`;

const PostNullItemBlock = styled.li`
  padding: 1rem;
  margin-bottom: 3rem;
  width: 100%;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  text-align:center;

  &:hover {
    transform: translateY(-8px);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 12px 20px 0px;
  }

  h1{
    font-size: 1.75rem;
    font-weight: bold;;
  }

  a:hover {
    color: ${palette.gray[6]};
  }
`;

const PostItemContent = styled.div`
  margin: 2rem 0 0;
  max-height: 40px;
  line-height: 1.53;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-word;
`;

export {
  PostListBlock,
  PostItemBlock,
  PostNullItemBlock,
  PostItemContent
};
