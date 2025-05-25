import React from 'react'
import styled from 'styled-components'
import Button from 'components/common/Button';
import palette from 'lib/styles/palette';

const FullScreen = styled.div`
position: fixed;
z-index: 30;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.25);
display: flex;
justify-content: center;
align-items: center;
`;
const ModalBlock = styled.div`
width: 320px;
background: ${palette.gray[0]};
padding: 1.5rem;
border-radius: 4px;
box-shadow: 0 0 8px rgba(0,0,0,0.125);

h2{
    margin-top: 0;
    margin-bottom: 1rem;
    color:#202124;
}
p{
    margin-bottom: 3rem;
    color:#202124;
}
`;

const ButtonWrapper = styled.div`
display: flex;
    justify-content: flex-end;
`;
const StyledButton = styled(Button)`
&+&{
    margin-left: 0.75rem;
}
`;
function Modal({ visible, title, description, confirmText='확인', cancelText='취소', onConfirm, onCancel}) {
    if(!visible) return null;
  return (
    <FullScreen>
        <ModalBlock>
            <h2>{title}</h2>
            <p>{description}</p>
            <ButtonWrapper>
                <StyledButton onClick={onCancel} label={cancelText}/>
                <StyledButton onClick={onConfirm} label={confirmText}/>
            </ButtonWrapper>
        </ModalBlock>
    </FullScreen>
  )
}

export default Modal