import styled from "styled-components";

const Layout = styled.div`
  margin: 2rem 0;
  padding: 0 .5rem;
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  border: 1px solid lightgrey;
  border-radius: 4px;

  input {
    padding: 0 1.5rem;
    width: 100%;
  }
`;
interface Props {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ query, onChange }: Props) {
  return (
    <Layout>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="검색어를 입력하세요."
        value={query}
        onChange={onChange}
      />
    </Layout>
  );
}
export default SearchBar;
