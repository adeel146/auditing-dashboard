import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout';
import { DashboardPage } from './pages/Dashboard';
import { PerspectiveDetailsPage } from './pages/Perspectives';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="perspectives/:id" element={<PerspectiveDetailsPage />} />
          {/* Placeholder routes */}
          <Route path="perspectives" element={<DashboardPage />} />
          <Route path="tasks" element={<DashboardPage />} />
          <Route path="documents" element={<DashboardPage />} />
          <Route path="reports" element={<DashboardPage />} />
          <Route path="users" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
