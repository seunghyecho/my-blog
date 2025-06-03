import React, { useState } from 'react';
import styled from 'styled-components';
import Tags from 'components/Main/Tags';
import Post from 'components/Main/Post';
import About from 'components/Main/About';
import MyPost from 'components/Main/MyPost';
import TabButton from 'components/common/TabButton';
import Responsive from 'components/common/Responsive';
import { WrapperStyled, ContentStyled } from 'lib/styles/main.styled';
import { FlexLayout } from 'lib/styles/common.styled';

const MainBlock = styled(Responsive)`
  padding-bottom: 10rem;
  height: 100vh;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function Main() {
  const [tab, setTab] = useState('allPosts');

  return (
    <MainBlock>
      <FlexLayout>
        <WrapperStyled>
          <TabContainer>
            <TabButton
              isActive={tab === 'allPosts'}
              onClick={() => setTab('allPosts')}
            >
              ALL POSTS
            </TabButton>
            <TabButton isActive={tab === 'myPosts'} onClick={() => setTab('myPosts')}>
              MY POSTS
            </TabButton>
            <TabButton isActive={tab === 'tags'} onClick={() => setTab('tags')}>
              TAGS
            </TabButton>
          </TabContainer>

          <ContentStyled>
            {tab === 'about' && <About />}
            {tab === 'allPosts' && <Post />}
            {tab === 'myPosts' && <MyPost />}
            {tab === 'tags' && <Tags />}
          </ContentStyled>
        </WrapperStyled>

      </FlexLayout>
    </MainBlock>
  );
}

export default Main;
