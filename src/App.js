import React from "react";
import "./App.css";
import "./assets/css/style.css";
import Header from "./pages/header.jsx";
import Home from "./pages/home.jsx";
import Footer from "./pages/footer.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="App" ref={(el) => (this.div = el)}>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
