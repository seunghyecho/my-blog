import Categories from 'components/Main/News/Categories';
import NewsItem from 'components/Main/News/NewsItem';
import { NewsListBlock } from 'components/Main/News/News.styled';
import { NewsT } from 'types/news';
interface Props {
  data: Array<NewsT>;
  category: string;
  handleSelect: (category: string) => void;
}

function News({ data, category, handleSelect }: Props) {
  return (
    <>
      <Categories category={category} handleSelect={handleSelect} />
      <NewsListBlock>
        {data?.map((d, i) =>
          <NewsItem data={d} key={i} />,
        )}
      </NewsListBlock>
    </>
  );
}

export default News;