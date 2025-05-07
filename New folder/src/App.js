import React from 'react';
import styled from 'styled-components';
import LoginForm from './components/LoginForm';

const AppContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`;

function App() {
  return (
    <AppContainer>
      <LoginForm />
    </AppContainer>
  );
}

export default App; 