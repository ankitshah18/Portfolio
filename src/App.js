import { Navbar } from "./Components/NavBar/navbar";
import Intro from "./Components/Intro/intro";
import Works from "./Components/Works/works";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import { Routes, Route } from "react-router-dom";
import BlogApp from "./Components/BlogApp/blogapp";
import Experience from "./Components/Experience/Experience";
import SingleWork from "./Components/Works/SingleWork";
import { AppProvider } from "./Components/Context/AppProvider";

// import DarkMode from "./Components/DarkMode/darkMode";
function App() {
  return (
    <AppProvider>
      {" "}
      <Routes>
        <Route
          index
          element={
            <div className="app">
              <Navbar />
              <Intro />
              <Education />
              <Experience />
              <Works />
              <Contact />
              <Footer />
            </div>
          }
        ></Route>
        <Route path="/BlogApp" element={<BlogApp />} />
        <Route path="/SingleWork" element={<SingleWork />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
