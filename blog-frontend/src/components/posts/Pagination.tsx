import React, { SetStateAction } from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';

const PaginationBlock = styled.div`
  width: 200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  button, p {
    font-weight: 600;
  }

  p{
    font-size: 1.5rem;
  }
  
`;

interface Props {
  page:number; 
  setPage:React.Dispatch<React.SetStateAction<number>>; 
  lastPage:number;
}
function Pagination({ page, setPage, lastPage }:Props) {
  const handleChangePage = (newPage:number)=>{
    setPage(newPage);
  }
  
  return (
    <PaginationBlock>
      <Button 
        label="이전" 
        disabled={page === 1} 
        onClick={()=>handleChangePage(page - 1)}
      />
      <p>{page}</p>
      <Button 
        label="다음" 
        disabled={page === lastPage}
        cyan={page !== lastPage}
        onClick={()=>handleChangePage(page + 1)}
      />
    </PaginationBlock>
  );
}
export default Pagination;
