import styled from 'styled-components';
import palette from 'lib/styles/palette';

const PostListBlock = styled.ul`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PostItemBlock = styled.li`
  padding: 1rem;
  margin-bottom: 3rem;
  width: calc(100%/2 - 5px);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;

  @media (max-width: 1024px) {
    width: calc(100% / 2);
  }
  @media (max-width: 768px) {
    width: 100%;
  }

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
  PostItemContent
};
