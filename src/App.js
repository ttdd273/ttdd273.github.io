import React from 'react';
import './App.css';
import "./assets/css/style.css"
import Header from './pages/Home/Header.js'
import Home from './pages/Home/Home.js'
import Footer from './pages/Home/Footer.js'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Portfolio from './pages/Portfolio/Portfolio.js';
// import { appendScript } from './components/LoadJs.js'

class App extends React.Component {
    componentDidMount () {
        // appendScript('./js/index.js');
        const script = document.createElement("script");
        script.src = './js/index.js';
        script.async = true;
        // document.body.append(script);
    }
    render() {
        return (
            <Router>
                <div className="App" ref={el => (this.div = el)}>
                    <Header/>
                    <Routes>
                        <Route path='/ttdd273w' element={<Home/>} />
                        <Route path='/computer-vision' element={<Portfolio/>} />
                        <Route path='/pong' element={<Portfolio/>} />
                    </Routes>
                    <Footer/>
                </div>
            </Router>
        )

    }
}

export default App;
