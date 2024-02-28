import React from "react";
import {
  IntroSection,
  ResumeSection,
  AboutMeSection,
  MyWorkSection,
} from "./homeSections";

class Home extends React.Component {
  render() {
    return (
      <div>
        <IntroSection />
        <ResumeSection />
        <AboutMeSection />
        <MyWorkSection />
      </div>
    );
  }
}

export default Home;
