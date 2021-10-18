
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import { useState } from 'react';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2c2f67';
      showAlert("Dark mode has been Enabled", "success");
      document.title = 'TextUtils - Dark mode'
      // setInterval(() => {
      // document.title= 'TextUtils - Dark mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title= 'Download Text Utils'
      //   }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "success");
      document.title = 'TextUtils - LightMode'

    }
  }
  return (
    <Router>
    <>

      <Navbar homeText="Home" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <TextForm heading="Enter the text to Analize" showAlert={showAlert} mode={mode} />
          </Route>
        </Switch>

      </div>

    </>
    </Router>
  );
}

export default App;
