import { Category, Layout } from 'components/Main/News/Categories/Categories.styled';

const categories = [
  {
    name: 'all',
    text: '전체',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

function Categories({ category, handleSelect }) {
  return (
    <Layout>
      {categories.map((c) => (
        <Category
          key={c.name}
          active={category === c.name}
          onClick={() => handleSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </Layout>
  );
}

export default Categories;