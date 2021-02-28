import React from 'react';
import * as Styled from './styles';

const Toogle: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.ToggleLabel>Light</Styled.ToggleLabel>
      <Styled.ToggleSelector
        checked
        onChange={() => console.log('mudou')}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <Styled.ToggleLabel>Dark</Styled.ToggleLabel>
    </Styled.Container>
  );
};

export default Toogle;
