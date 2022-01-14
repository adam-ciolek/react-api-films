import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import './index.css';
import {  MyStorage } from './context'

ReactDom.render(
  <MyStorage>
    <Router>
      <App/>
    </Router>
  </MyStorage>,
  document.getElementById('root'));