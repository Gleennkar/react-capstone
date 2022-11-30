import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/:name" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
