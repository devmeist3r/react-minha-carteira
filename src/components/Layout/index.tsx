import React from 'react';

import * as Styled from './styles';

import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';

const Layout: React.FC = () => {
  return (
    <Styled.Grid>
      <MainHeader />
      <Aside />
      <Content />
    </Styled.Grid>
  );
};

export default Layout;
