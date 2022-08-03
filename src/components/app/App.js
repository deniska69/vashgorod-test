import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from '../pages/landing/Landing';
import News from '../pages/news/News';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/news/:id" element={<News />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;