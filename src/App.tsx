import React from 'react';
import { Container } from 'reactstrap';
import { Header } from './components/Header';
import { Home } from './pages/Home';

function App() {
  return (
    <Container fluid className="overflow-hidden px-0 pt-4">
      <Container>
        <Header />
      </Container>
      <Home />
    </Container>
  );
}

export { App };
