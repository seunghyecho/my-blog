import palette from 'lib/styles/palette';
import styled from 'styled-components';

const NewsListBlock = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

const NewsItemBlock = styled.li`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% / 3);
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

  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    > *{
      padding: 20px 10px;
    }

    .top {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 100px;
      line-height: 1.5rem;

      p {
        margin-top: 0.5rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }

    .bottom{
      border-top: 1px solid ${palette.gray[2]};

      b {
        font-size: 11px;

          & + b:before {
            content: '\\B7';
            padding: 0 0.25rem;
            color: ${palette.gray[6]};
        }
      }
    }
  }
`;


export { NewsListBlock, NewsItemBlock };