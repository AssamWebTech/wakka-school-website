import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import HomePage from "./pages/home/HomePage";
import AboutUs from "./pages/about/AboutUs";
import ContactUs from "./pages/contact/ContactUs"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
