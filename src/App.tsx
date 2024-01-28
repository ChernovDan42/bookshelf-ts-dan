import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from 'Pages/Home';
import ShoppingPage from 'Pages/ShoppingPage';
import CategoryPage from 'Pages/CategoryPage';

import './App.css';

const App = () => {
  return (
    <div
      style={{
        transition: 'background-color 0.3s linear,color 0.3s linear',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shopping-list" element={<ShoppingPage />} />
          <Route path="/:category" element={<CategoryPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
