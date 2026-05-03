import React from "react";
import "./assets/css/site.css";
import Header from "./pages/header.jsx";
import Footer from "./pages/footer.jsx";
import {
  IntroSection,
  ResumeSection,
  AboutMeSection,
  MyWorkSection,
} from "./pages/homeSections";

function App() {
  return (
    <div className="App">
      <Header />
      <IntroSection />
      <ResumeSection />
      <AboutMeSection />
      <MyWorkSection />
      <Footer />
    </div>
  );
}

export default App;
