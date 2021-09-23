import React from 'react';

const Note = (props) => {
  return (
    <div className='flex flex-col w-screen min-h-screen px-10 gap-10 mt-10'>
      <textarea
        type='text'
        className='w-full text-3xl outline-none'
        placeholder='Your title here'
        defaultValue={props.title}
        onChange={(e) => props.setTitle(e.target.value)}
      ></textarea>
      <textarea
        className='w-full outline-none'
        rows='100'
        placeholder='Your note here'
        defaultValue={props.contents}
        onChange={(e) => props.setContents(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Note;
