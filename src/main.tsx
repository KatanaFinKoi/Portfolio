import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import AboutMe from "./Pages/aboutMe";
import Portfolio from "./Pages/portfolio";
import Contact from "./Pages/contact";
import Resume from "./Pages/resume";
import './index.css';
import './App.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/resume",
        element: <Resume />
      },
    ]
  }
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
