import React from 'react';
import Text from '../atoms/Text';
import LinkButton from '../atoms/LinkButton';

const Navbar = () => {

  return (
    <>
      <Text.Heading>Fill in the blanks</Text.Heading>

      <nav className="has-text-centered pt-3">
        <LinkButton path="/">Exercises</LinkButton>
        <LinkButton path="/admin">Admin</LinkButton>
      </nav>
      <hr />
    </>
  )
}

export default Navbar;
