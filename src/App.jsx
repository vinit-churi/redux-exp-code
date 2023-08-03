import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Root } from './components';
const router = createBrowserRouter([
  {
    element: <Root />,
    path: '/',
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
