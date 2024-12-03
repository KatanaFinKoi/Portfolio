
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';


const Layout = () => (
  <div className="container">
    <Navbar /> {/* Navbar stays on all pages */}
    <Outlet /> {/* Renders the matched child route's element */}
  </div>
);

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        {/* Shared layout */}
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
