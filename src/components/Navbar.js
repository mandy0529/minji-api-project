import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Div>
      <Alink to="/">home</Alink>
    </Div>
  );
};
const Div = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Alink = styled(Link)`
  width: 90vw;
  max-width: var(--max-width);
  display: flex;
  align-items: center;
`;

export default Navbar;
