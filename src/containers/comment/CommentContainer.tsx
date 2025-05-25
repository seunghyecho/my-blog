import React, { useRef, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Button from "components/common/Button";
import palette from "lib/styles/palette";

const Wrapper = styled.div`
    width: 100%;

    h1{
        font-size: 1.125rem;
        line-height: 1.5;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    textarea{
        resize: none;
        padding: 1rem 1rem 1.5rem;
        outline: none;
        margin-bottom: 1.5rem;
        width: 100%;
        border-radius: 4px;
        min-height: 6.125rem;
        font-size: 1rem;
        border: 1px solid ${palette.gray[4]};
    }

    button{
        margin-left: auto;
        display: block;
    }

`;
const CommentBlock = styled.li`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    .user{
        margin: 0.5rem 0;

        span + span:before {
            padding: 0 0.25rem;
            color: ${palette.gray[4]};
            content: '\\B7';
        }

        b{
            color: ${palette.gray[8]};
            font-size: 1rem;
        }
    }

    .comment{
        font-size: 1.125rem;
        line-height: 1.7;
        letter-spacing: -0.004em;
        word-break: keep-all;
        overflow-wrap: break-word;
    }
`;
function CommentContainer(){
    const [comments, setComments]= useState([
        {
            id:1,
            username:'username',
            date:'1010-10-10',
            comment:'댓글입니다'
        },
        {
            id:2,
            username:'username',
            date:'1010-10-10',
            comment:'댓글입니다'
        }
    ])
    const [value, setValue]= useState('');

    const nextId = useRef(3);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setValue(e.target.value);
    }
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        
        const newComments = {
            id:nextId.current,
            username:'new username',
            date:'1010-10-10',
            comment:value,
        };

        setComments([...comments, newComments])
        setValue('')
        nextId.current += 1;
    }
    return(
        <Wrapper>
            <h1>{comments.length}개의 댓글</h1>
            <form onSubmit={handleSubmit}>
                <textarea 
                    name="comment" 
                    id="comment" 
                    value={value} 
                    onChange={handleChange} 
                    cols={30} 
                    rows={4} 
                    placeholder='댓글을 작성하세요.'
                />
                <Button type="submit" label="댓글 작성" cyan/>
            </form>
            <ul>
                {comments.map((c)=>(
                    <CommentBlock key={c.id}>
                        <div className="user">
                            <span><Link href="/"><b>{c.username}</b></Link></span>
                            <span>{c.date}</span>
                        </div>
                        <div className="comment"><p>{c.comment}</p></div>
                    </CommentBlock>
                ))}
            </ul>
        </Wrapper>
    )
}

export default CommentContainer;

