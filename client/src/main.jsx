import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Home.css';
import './Styles/Intro.css';
import './Styles/Styles.css';
import './Styles/Details.css';


import App from './App.jsx';
import Home from './pages/Home';
import Intro from './pages/Intro';
import MovieDetails from './pages/MovieDetails';
import VideoPlayer from './pages/VideoPlayer'; // Import VideoPlayer component

// import AuthPage from './pages/AuthPage'; // Import your AuthPage component
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
      // {
      //   path: 'auth',
      //   element: <AuthPage />, // Define the /auth route
      // },
      {
        path: 'MovieDetails/:id', // Define the route for MovieDetails with a parameter for the movie ID
        element: <MovieDetails />, // Render the MovieDetails component
      },
      {
        path: 'play/:movieId', // Define the route for the VideoPlayer with a parameter for the movie ID
        element: <VideoPlayer />, // Render the VideoPlayer component
      },
      // ... any other routes you may want to add
    ],
  },
  // ... potentially other top-level routes
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
