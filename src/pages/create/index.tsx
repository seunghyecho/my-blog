import React from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import Responsive from 'components/common/Responsive';
import Form from 'components/post/Form';
import { Layout } from 'lib/styles/common.styled';
import { fetchReadPost } from 'lib/api/posts';

const CreateBlock = styled(Responsive)`
  padding-bottom: 10rem;
`;
function Create() {
  const postId = window.localStorage.getItem('_id');
  const { data, isLoading }= useQuery(['detail'], () => fetchReadPost(postId),{
    enabled:!!postId
  });

  return (
    <CreateBlock>
      <Layout>
        <Form data={!isLoading && data} postId={postId}/>
      </Layout>
    </CreateBlock>
  );
}

export default Create;
