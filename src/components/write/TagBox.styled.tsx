import styled from 'styled-components';
import palette from 'lib/styles/palette';

const TagBoxBlock = styled.div`
display: flex;
  width: 100%;
  border-top: 1px solid ${palette.gray[2]};
  padding-top: 2rem;
`;
const TagForm = styled.form`
  display: flex;
  max-width: 200px;
  border: 1px solid ${palette.gray[2]};
  border-radius: 4px;
  overflow: hidden;

  input {
    flex:1;
    padding-left: .5rem;
  }

  button {
    padding: 0.75rem;
    background-color: ${palette.gray[8]};
    color: ${palette.gray[0]};

    &:hover {
      background-color: ${palette.gray[6]};
    }
  }
`;

const Tag = styled.div`
  margin-right: .5rem;
  padding: 0.75rem;
  border-radius: 4px;
  color: ${palette.cyan[6]};
  background-color: ${palette.gray[1]};
  font-weight: 600;

  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
`;

export { TagBoxBlock, TagForm, Tag, TagListBlock };