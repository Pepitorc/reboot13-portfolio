import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/navbar/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import History from './components/history/History'
import About from './components/about me/About'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Portfolio />
    <History />
    <About />
    <Skills />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
