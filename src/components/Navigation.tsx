// // [REFACTOR]: props and use props instead
// // types
// // [FIXME]: Remove a href and I want onClick events and useHistory hook to change the url

import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigationProps {
  homeLink: string;
  aboutLink: string;
}

const Navigation: React.FC<NavigationProps> = ({ homeLink, aboutLink }) => {
  const navigate = useNavigate();

  const handleNavigation = (url: string) => {
    navigate(url);
  }

  return (
    <div>
      <div className='navigation text-react z-50'>
        <button className="rounded-lg px-3 py-2 text-black font-medium" onClick={() => handleNavigation(homeLink)}>
          <span>Home</span>
        </button>
        <button className="rounded-lg px-3 py-2 text-black font-medium" onClick={() => handleNavigation(aboutLink)}>
          <span>About</span>
        </button>
      </div>
    </div>
  );
};

export default Navigation;

