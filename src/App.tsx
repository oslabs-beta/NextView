import './App.css';
import { Routes, Route } from 'react-router-dom';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Page1 fakeProp='fakeProp' />} />
          <Route path='/Page2' element={<Page2 fakeProp='fakeProp' />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
