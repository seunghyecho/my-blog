import React, { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import Responsive from 'components/common/Responsive';
import News from 'components/Main/News';
import Post from 'components/Main/Post';
import About from 'components/Main/About';
import Side from 'components/common/Side';
import TabButton from 'components/common/TabButton';
import { WrapperStyled, ContentStyled } from 'lib/styles/main.styled';
import { FlexLayout } from 'lib/styles/common.styled';
import { fetchNews } from 'lib/api/news';

const MainBlock = styled(Responsive)`
  padding-bottom: 10rem;
`;
const TabContainer = styled.div`
  display: flex;
  justify-content: center;
`;
function Main() {
  const [page] = useState<number>(1);
  const [tab, setTab] = useState('about');
  const [category, setCategory] = useState<string>('all');

  const news = useQuery(['news', { page, category }], () =>
    fetchNews({
      params: { page: Number(page) },
      category: category === 'all' ? '' : category
    }))
  ;
  const handleSelect = useCallback(
    (category:string) =>
      setCategory(category)
    , []);
  
  const newsList = news.data?.data.articles || [];

  return (
    <MainBlock>
      <FlexLayout>
        <WrapperStyled>
          <TabContainer>
            <TabButton isActive={tab === 'about'} onClick={()=> setTab('about')}>ABOUT</TabButton>
            <TabButton isActive={tab === 'posts'} onClick={()=> setTab('posts')}>POSTS</TabButton>
            <TabButton isActive={tab === 'news'} onClick={()=> setTab('news')}>NEWS</TabButton>
         </TabContainer>

          <ContentStyled>
          {tab === 'about' && <About />}
          {tab === 'posts' && <Post />}
          {tab === 'news' && <News data={newsList} category={category} handleSelect={handleSelect} />}
          </ContentStyled>
        </WrapperStyled>

        <Side />
      </FlexLayout>
    </MainBlock>
  );
}


export default Main;


