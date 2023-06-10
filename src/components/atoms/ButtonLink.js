import React from 'react';
import { NavLink } from 'react-router-dom';

const ButtonLink = ({ path, children }) => {
  return (
    <NavLink to={path} className="has-text-white">
      <button className="button is-primary is-rounded ml-2 mr-2">
        {children}
      </button>
    </NavLink>
  )
}

export default ButtonLink;
