import './index.css'
import App from './App'
import AboutMe from './Pages/aboutMe'
import Contact from './Pages/contact'
import Portfolio from './Pages/portfolio'
import Resume from './Pages/resume'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    children: [
      {
        index: true, // Default page
        path: "/aboutMe",
        element: <AboutMe />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/resume',
        element: <Resume />
      },
    ]
  }
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}