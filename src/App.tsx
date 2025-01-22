import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import HomePage from "./pages/home/HomePage";
import AboutUs from "./pages/about/AboutUs";
import ContactUs from "./pages/contact/ContactUs";
import Events from "./pages/events/Events";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/*"element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
