import { Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppBar from './components/Appbar';
import SkrollToTop from './components/SkrollToTop';
import Container from './components/Container';
import Spinner from './components/Spinner';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /* webpackChunkName: "HomePage" */)
);
const VariablesList = lazy(() =>
  import(
    './views/VariablesList/VariablesList' /* webpackChunkName: "VariablesList" */
  )
);
const Variable = lazy(() =>
  import('./views/Variable/Variable' /* webpackChunkName: "Variable" */)
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/variables" element={<VariablesList />} />
          <Route path="/variables/:variableId" element={<Variable />} />
        </Routes>
      </Suspense>
      <SkrollToTop showBelow={250} />
      <ToastContainer
        autoClose={2000}
        closeOnClick={true}
        position="top-center"
      />
    </Container>
  );
}

export default App;
