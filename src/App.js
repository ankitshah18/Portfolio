import { Navbar } from "./Components/NavBar/navbar";
import Intro from "./Components/Intro/intro";
import Works from "./Components/Works/works";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import { Routes, Route } from "react-router-dom";
import BlogApp from "./Components/BlogApp/blogapp";

// import DarkMode from "./Components/DarkMode/darkMode";
function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <div className="app">
            <Navbar />
            <Intro />
            <Education />
            <Works />
            <Contact />
            <Footer />
          </div>
        }
      ></Route>
      <Route path="/BlogApp" element={<BlogApp />} />
    </Routes>
  );
}

export default App;
