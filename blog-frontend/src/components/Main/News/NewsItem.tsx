import Link from 'next/link';
import { NewsItemBlock } from 'components/Main/News/News.styled';
import { NewsT } from 'types/news';
interface Props {
  data: NewsT;
}

function NewsItem({ data }: Props) {
  const { author, description, source, title, url, publishedAt } = data;
  return (
    <NewsItemBlock key={url}>
      <Link href={url} target='_blank'>
        <div className='top'>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
          <p>{new Date(publishedAt).toLocaleDateString()}</p>
        </div>
        <div className="bottom">
            <b>{author}</b>
            <b>by {source.name}</b>
          </div>
      </Link>
    </NewsItemBlock>
  );
}

export default NewsItem;