// The answer was already done in the boiler plate code.
// I am only making minor tweaks

import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
// BrowserRouter: Wraps the whole application to enable routing.
import Loading from "./Loading";
// just the loading text as another component

import { lazy, Suspense } from "react";
const Home = lazy(() => import("./Home"));
const Newsletter = lazy(() => import("./Newsletter"));
const Dashboard = lazy(() => import("./Dashboard"));
// components that are lazily loaded

export default function App() {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
            {/* Creates clickable links that change the URL without refreshing the page */}
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="./newsletter">Newsletter</Link>
          </li>
        </ul>

        {/* suspense allows you to handle asynchronous rendering, wraps components that's lazily loaded
    fallback prop specifies what to render while the wrapped components are loading
*/}
        <Suspense fallback={<Loading />}>
          {/* Routes: A container for defining routes */}
          <Routes>
            {/* .Route: Specifies the path and the component to render when that path is active */}
            <Route path="/" element={<Home />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}
