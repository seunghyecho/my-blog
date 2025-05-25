import Link from 'next/link';
import styled from 'styled-components';
import { Tag } from 'components/write/TagBox.styled';

const Wrapper = styled.div`
  height: 3rem;
`;

const TagsBlock = styled(Tag)`
  margin-top: 0.5rem;
  display: inline-block;
`;

function Tags({ tags }) {
  return (
    <Wrapper>
      {tags.map(t => (
        <TagsBlock key={t}>
          <Link href={`/?tag=${t}`} >#{t}</Link>
        </TagsBlock>
      ))}
    </Wrapper>
  );
}

export default Tags;
