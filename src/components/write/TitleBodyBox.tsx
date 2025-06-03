import React, { useRef } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import palette from 'lib/styles/palette';

import ReactQuill, { ReactQuillProps } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface ForwardedQuillComponent extends ReactQuillProps {
  forwardedRef: React.Ref<ReactQuill>;
}

const QuillNoSSRWrapper = dynamic(
  async () => {
    const { default: QuillComponent } = await import('react-quill');
    const Quill = ({ forwardedRef, ...props }: ForwardedQuillComponent) => (
      <QuillComponent ref={forwardedRef} {...props} />
    );
    return Quill;
  },
  { loading: () => <div>...loading</div>, ssr: false },
);

const Wrapper = styled.div`
  padding: 2rem 0;
  > * {
    margin: .5rem 0;
  }

  input {
    padding: 0;
    width: 100%;
    line-height: 1.5;
    border-bottom: 4px solid ${palette.cyan[5]};
    font-size: 2.75rem;
    font-weight: bold;;
  }

  .ql-editor {
    min-height: 150px;
    font-size: 1.3rem;
  }
`;

interface Props{
  title:string; 
  setTitle:any; 
  body:any; 
  setBody:any;
}

function TitleBodyBox({ title, setTitle, body, setBody }:Props) {
  const quillInstance = useRef<ReactQuill>(null);
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ]


  return (
    <Wrapper>
      <input
        type='text'
        placeholder='제목을 입력하세요.'
        defaultValue={title}
        onChange={(e)=> setTitle(e.currentTarget.value)}
      />
      <QuillNoSSRWrapper
        theme='snow'
        placeholder='내용을 입력하세요.'
        defaultValue={body}
        onChange={(e) => setBody(e)}
        modules={modules}
        formats={formats} 
        forwardedRef={quillInstance}      />
    
    </Wrapper>
  );
}

export default TitleBodyBox;