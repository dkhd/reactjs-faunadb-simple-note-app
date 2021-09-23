import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Note from '../components/note';
import { getNoteByID, updateNote, createNote, deleteNote } from '../util/db';

const NewNote = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const id = window.location.pathname.replace('/', '');
  let history = useHistory();

  useEffect(() => {
    if (!isNaN(id)) {
      getNoteByID(id).then((res) => {
        setTitle(res.data.title);
        setContents(res.data.contents);
      });
    }
  }, [id]);

  const handleSaveButton = () => {
    if (!isNaN(id)) {
      updateNote(id, title, contents).then((res) => {
        history.push('/');
      });
    } else {
      createNote(title, contents).then((res) => {
        history.push('/');
      });
    }
  };

  const handleDeleteButton = () => {
    if (!isNaN(id)) {
      deleteNote(id).then((res) => {});
    }
  };

  return (
    <div className='mt-5'>
      <div className='flex flex-row mx-10 gap-5'>
        <Link to='/' className='p-3 rounded-xl hover:bg-yellow-100'>
          ← Back to home
        </Link>
        <div className='flex-grow'></div>
        <div
          className='p-3 rounded-xl bg-blue-100 hover:bg-blue-300'
          role='button'
          onClick={handleSaveButton}
        >
          💾 Save
        </div>
        <div
          className='p-3 rounded-xl bg-red-100 hover:bg-red-300'
          role='button'
          onClick={handleDeleteButton}
        >
          ❌ Delete
        </div>
      </div>
      <Note
        title={title}
        contents={contents}
        setTitle={setTitle}
        setContents={setContents}
      ></Note>
    </div>
  );
};

export default NewNote;
