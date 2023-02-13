import React from 'react';
import { NavLink } from 'react-router-dom';

// [REFACTOR]: props and use props instead
// types
// [FIXME]: Remove a href and I want onClick events and useHistory hook to change the url
const Navigation: React.FC = () => {
  return (
    <div>
      <div className='navigation text-react z-50'>
        <NavLink to="/">
          <a className="rounded-lg px-3 py-2 text-black font-medium">
            <span>Home</span>
          </a>
        </NavLink>
        <NavLink to="/about">
          <a className="rounded-lg px-3 py-2 text-black font-medium">
            <span>About</span>
          </a>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
