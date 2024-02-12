import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';

import { lazy } from 'react';

const Home = lazy(() => import('./Pages/Home'));
const ShoppingPage = lazy(() => import('./Pages/ShoppingPage'));
const CategoryPage = lazy(() => import('./Pages/CategoryPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shopping-list" element={<ShoppingPage />} />
        <Route path="/:category" element={<CategoryPage />} />
      </Route>
    </Routes>
  );
};

export default App;
