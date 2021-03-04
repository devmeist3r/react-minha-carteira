import React from 'react';

import * as Styled from './styles';

import SelectInput from './../SelectInput';

const ContentHeader: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.TitleContainer>
        <h1>Titulo</h1>
      </Styled.TitleContainer>
      <Styled.Controllers>
        <SelectInput />
      </Styled.Controllers>
    </Styled.Container>
  );
};

export default ContentHeader;
