import React, { useCallback, useEffect, useState } from 'react';
import { TagBoxBlock, TagForm, Tag, TagListBlock } from 'components/write/TagBox.styled';

function TagItem({ tag, onRemove }){
  return(
    <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
  )
}
  

function TagList({ tags, onRemove }){
  return(
    <TagListBlock>
      {tags.map((tag) => (
        <TagItem key={tag} tag={tag} onRemove={onRemove} />
      ))}
    </TagListBlock>
  )
} 
  

function TagBox({ tags, onChangeTags }) {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const insertTags = useCallback(
    tag => {
      if (!tag) return;
      if (localTags.includes(tag)) return;
      const nextTags = [...localTags, tag];
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    }, [localTags, onChangeTags]
  );

  const onRemove = useCallback(
    tag => {
      const nextTags = localTags.filter(t => t !== tag);
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    }, [localTags, onChangeTags]
  );

  const onChange = useCallback(e => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      insertTags(input.trim());
      setInput('');
    }, [input, insertTags]
  );

  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  return (
    <TagBoxBlock>
      <TagList tags={localTags} onRemove={onRemove} />
      <TagForm>
        <input
          type='text'
          placeholder='태그를 입력하세요'
          defaultValue={input}
          onChange={onChange}
        />
        <button type='submit' onClick={onSubmit}>추가</button>
      </TagForm>
    </TagBoxBlock>
  );
}

export default TagBox;