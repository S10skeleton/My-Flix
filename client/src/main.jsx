import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import Home from './pages/Home';
import Intro from './pages/Intro';
import AuthPage from './pages/AuthPage'; // Import your AuthPage component
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Intro />, // Set Intro as the index page
      },
      {
        path: 'home',
        element: <Home />, // Accessible at '/home'
      },
      {
        path: 'auth',
        element: <AuthPage />, // Define the /auth route
      },
      // ... any other routes you may want to add
    ],
  },
  // ... potentially other top-level routes
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
