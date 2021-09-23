import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/global/Navbar';

import { getAllNotes } from '../util/db';

const Home = () => {
  const [noteData, setnoteData] = useState([]);

  useEffect(() => {
    getAllNotes().then((res) => {
      setnoteData(res);
    });
  }, []);

  return (
    <div className='flex flex-wrap gap-3 w-full h-full justify-center py-10'>
      <Navbar></Navbar>
      <div className='flex flex-col hover:bg-blue-100 bg-red-100 w-10/12 md:w-3/12 p-5 filter drop-shadow'>
        <div className='flex flex-col'>
          <span className='font-semibold'>About</span>
          <span className='font-light'>
            This simple note-taking app is built with ReactJS + TailwindCSS +
            FaunaDB. Feel free to use this note app, but I'm not taking any
            responsibilities with the contents you are putting in. You can check
            the Github repository here: <a className='font-semibold text-blue-500 hover:text-blue-700' href='https://github.com/dkhd/reactjs-faunadb-simple-note-app' target='_blank' rel='noreferrer'>https://github.com/dkhd/reactjs-faunadb-simple-note-app</a>
          </span>
        </div>
      </div>
      {noteData && noteData.length > 0
        ? noteData.map((items, index) => (
            <Link
              to={'/' + items.ref.value.id}
              className='flex flex-col hover:bg-blue-100 bg-yellow-100 w-10/12 md:w-3/12 p-5 filter drop-shadow'
              key={index}
            >
              <div className='flex flex-col'>
                <span className='font-semibold'>
                  {items.data.title.length > 30
                    ? items.data.title.substring(0, 30) + '...'
                    : items.data.title}
                </span>
                <span className='font-light'>
                  {items.data.contents.length > 250
                    ? items.data.contents.substring(0, 250) + '...'
                    : items.data.contents}
                </span>
              </div>
            </Link>
          ))
        : null}
    </div>
  );
};

export default Home;
