/*
 * This was previously navigation bar at the top, but changed to sticky bottom-right button
 */

import { NavLink } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

const links = [
  {
    text: 'Create new note',
    path: '/new',
  },
];

const Icon = (props) => {
  const iconSize = 24;

  switch (props.name) {
    case '/new':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 4v16m8-8H4'
          />
        </svg>
      );

    default:
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height={iconSize}
          width={iconSize}
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      );
  }
};

const Navbar = () => {
  return (
    <div className='fixed bottom-0 right-0 m-5'>
      <div className='flex flex-col justify-end shadow bg-purple-300 rounded-full overflow-hidden'>
        {links.map((items, index) => (
          <NavLink
            exact
            to={items.path}
            key={index}
            activeClassName='bg-blue-100'
            className='px-5 py-5 hover:bg-blue-100 font-title'
            data-tip={items.text}
          >
            <Icon name={items.path}></Icon>
          </NavLink>
        ))}
        <ReactTooltip place='left' type='dark' effect='solid'></ReactTooltip>
      </div>
    </div>
  );
};

export default Navbar;
