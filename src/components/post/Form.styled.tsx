import styled from 'styled-components';
import Button from 'components/common/Button';

const FormLabel = styled.label`
  text-transform: uppercase;
  font-size: 14px;
  color: #c1c1c1;
  white-space: nowrap;
`;

const FormButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

const FormButton = styled(Button)`
  font-weight: 600;
`;

const FormContent = styled.div`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: 1px solid #efefef;
  border-radius: 4px;

  &:focus,
  &:active {
    border-bottom: 2px solid #619ffb;
  }
`;

export { FormLabel, FormButtonWrap, FormButton, FormContent };
