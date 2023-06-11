import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LinkButton = ({ path, children }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link to={path} className="has-text-white">
      <button className={`button is-rounded ml-2 mr-2 ${isActive && 'is-primary'}`}>
        {children}
      </button>
    </Link>
  )
}

export default LinkButton;
