import styled from 'styled-components';
import palette from 'lib/styles/palette';

const Wrapper = styled.div`
  position: relative;
  width: 30%;
  color:#868e96;

  @media (max-width: 1024px) {
    width: unset;
  }

`;
const TemplateBlock = styled.div`
  width: 240px;
  margin-left: 5rem;
  border-radius: 4px;
  overflow: hidden;

  @media (max-width: 1024px) {
    display: none;
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    line-height: 3rem;
    background-color:${palette.cyan[7]};
    color: ${palette.gray[0]};
  }
`;

const TemplateForm = styled.form`
  display: flex;
  align-items: center;
  height: 3rem;

  > *{
    height: 100%;
  }

  input {
    padding: 0 0.5rem;
    width: 80%;
    
    color: ${palette.gray[3]};
    background-color: ${palette.gray[7]};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    color: ${palette.gray[0]};
    background-color: ${palette.gray[6]};
    transition: 0.1s background-color ease-in;

    &:hover {
      background-color: ${palette.gray[5]};
    }
  }
`;

const ListItem = styled.li`
  display: flex;
  padding: 1rem;
  align-items: center;

  &:nth-child(even) {
    background-color: ${palette.gray[0]};
  }

  p {
    margin-left: 0.5rem;
    flex: 1;
  }
`;

const CheckBox = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  &.completed {
    svg {
      color: ${palette.cyan[5]};
    }
  }

  &.completed + p {
    color: ${palette.gray[5]};
    text-decoration: line-through;
  }
`;

const RemoveBox = styled.button`
  display: inline-flex;
  align-items: center;

  &:hover {
    color: #ff8787;
  }
`;

export { 
  Wrapper,
  TemplateBlock, 
  TemplateForm, 
  ListItem,
  CheckBox, 
  RemoveBox 
};