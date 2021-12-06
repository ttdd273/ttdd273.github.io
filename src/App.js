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
import Handtracking from './assets/img/handtracking.jpg'
import Pong from './assets/img/pong.jpg'
import BillSplitter from './assets/img/billsplitter.png'
import School from './assets/img/school.png'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App" ref={el => (this.div = el)}>
                    <Header />
                    <Routes>
                        <Route path='/ttdd273w' element={
                            <Home image1={Handtracking} image2={Pong} image3={BillSplitter} image4={School}/>
                        } />
                        <Route path='/computer-vision' element={
                            <Portfolio categoryName="Python" 
                                projectName="Handtracking Project"
                                imagePath={Handtracking}
                                subtitleName="Track Your Hand to Control Volume"
                                description="This project utilizes python packages such as mediapipe to produce a hantracking module.
                                Using the module, we are able to control the volume of the device we are on. Credits to: Murtaza Hassan"
                            />}
                        />
                        <Route path='/pong' element={
                            <Portfolio categoryName="Python Made" 
                                projectName="Pong"
                                imagePath={Pong}
                                subtitleName="Classic Pong Game"
                                description="This is a very simple pong game made in python. Built using the pen module in python.
                                 Credits to: Christian Thompson"
                            />} 
                        />
                        <Route path='/billsplitter' element={
                            <Portfolio categoryName="Python Made" 
                                projectName="Bill Splitter"
                                imagePath={BillSplitter}
                                subtitleName="Split Your Bill with Friends"
                                description="This is a very simple web application that splits the bill depending on various inputs."
                            />} 
                        />
                        <Route path='/schoolprojects' element={
                            <Portfolio categoryName="School Projects" 
                                projectName="Assignments and Interesting Implementations"
                                imagePath={School}
                                subtitleName="Python, Java, scikit-learn"
                                description="The following are some projects I've implemented in school. Please contact me if you are
                                interested in any of the following: Imager; Froggit; Turtle Drawer; What makes a good game?;
                                BFS and DFS via Sewer Diver"
                            />} 
                        />
                    </Routes>
                    <Footer/>
                </div>
            </Router>
        )

    }
}

export default App;
