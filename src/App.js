import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Dashboard, { dashboardLoader } from './pages/Dashboard'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: dashboardLoader
  },
  {
    path: "/About",
    element: <h1>About</h1>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
