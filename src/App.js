import "./App.css";
import { lazy, Suspense } from "react";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Accessories from "./Pages/accessories";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import First from "./Pages/First";
import OutOfStock from "./Pages/OutOfStock";
import Context from "./context/Context";

const Mac = lazy(() => import("./Pages/mac"));
const Ipad = lazy(() => import("./Pages/ipad"));
const Iphone = lazy(() => import("./Pages/iphone"));
const Tv = lazy(() => import("./Pages/tv"));
const Services = lazy(() => import("./Pages/services"));
const Locations = lazy(() => import("./Pages/locations"));
const Watches = lazy(() => import("./Pages/watches"));
const Offers = lazy(() => import("./Pages/Offers"));
const Support = lazy(() => import("./Pages/Support"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading....</div>}>
        <BrowserRouter>
          <Navbar />
          <Context>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="mac" element={<Mac />} />
              <Route path="ipad" element={<Ipad />} />
              <Route path="iphone" element={<Iphone />} />
              <Route path="watches" element={<Watches />} />
              <Route path="tv" element={<Tv />} />
              <Route path="accessories" element={<Accessories />} />
              <Route path="services" element={<Services />} />
              <Route path="locations" element={<Locations />} />
              <Route path="offers" element={<Offers />} />
              <Route path="support" element={<Support />} />
              <Route path="first" element={<First />} />
              <Route path="outofstock" element={<OutOfStock />} />
            </Routes>
            <Products />
            <Footer />
          </Context>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
