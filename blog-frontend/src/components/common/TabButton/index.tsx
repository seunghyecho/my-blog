import React, { useTransition } from "react";
import styled from "styled-components";
import palette from 'lib/styles/palette';

interface Props{
    isActive:boolean;
    children?:any;
    onClick:any;
}

const TabStyled = styled.button`
    &::before {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color:${palette.gray[1]};
      z-index: -1;
    }

      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      width: 100px;
      height: 6rem;
      line-height: 6rem;
      transition: all 0.25s ease-in-out 0s;
      font-weight: 600;
      box-sizing: border-box;
      cursor: pointer;

      &.active {
        color: ${palette.cyan[5]};
        border-bottom: 1px solid ${palette.cyan[5]};
      }

      &.pending {
        color: ${palette.cyan[2]};
      }
`;
function TabButton({ isActive, children, onClick } : Props){
    const [isPending, startTransition] = useTransition();
    
    if(isActive){
        return <TabStyled className="active">{children}</TabStyled>
    }
    if(isPending){
        return <TabStyled className="pending">{children}</TabStyled>
    }
    return(
        <TabStyled onClick={()=> startTransition(() => onClick())}>{children}</TabStyled>
    )
}
export default TabButton;