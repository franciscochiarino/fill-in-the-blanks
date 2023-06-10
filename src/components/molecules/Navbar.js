import React from 'react';
import Text from '../atoms/Text';
import ButtonLink from '../atoms/ButtonLink';

const Navbar = () => {

  return (
    <>
      <Text.Heading>Fill in the blanks</Text.Heading>

      <nav className="has-text-centered pt-3">
        <ButtonLink path="/">Exercises</ButtonLink>
        <ButtonLink path="/admin">Admin</ButtonLink>
      </nav>
      <hr />
    </>
  )
}

export default Navbar;
