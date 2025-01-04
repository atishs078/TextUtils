import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,  // Use Routes instead of Switch
  Route
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [textColor, setTextColor] = useState('dark');
  const [theme, settheme] = useState('Enable Dark Mode');
  const [textAreaColor, settextAreaColor] = useState('white');
  const [colorTextArea, setcolorTextArea] = useState();
  const [alert, setalert] = useState(null);
  const [btntype, setbtntype] = useState('primary');

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const toggelMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      showAlert("Dark mode is enabled", "success");
      setTextColor('light');
      settheme('Disable Dark Mode');
      settextAreaColor('#343a40');
      document.body.style.backgroundColor = '#343a40';
      setcolorTextArea('white');
      setbtntype('light');
    } else {
      setMode('light');
      setTextColor('dark');
      settheme('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      settextAreaColor('white');
      setcolorTextArea('black');
      showAlert("Light mode is enabled", "success");
      setbtntype('primary');
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About us" mode={Mode} toggelMode={toggelMode} textcolor={textColor} theme={theme} />
        <div className="container">
          <Alert alert={alert} />
        </div>

        <Routes>  {/* Use Routes instead of Switch */}
          <Route exact path="/about" element={<About mode={Mode} aboutuscolor={colorTextArea} colorText={textColor} textAreaFontColor={colorTextArea}/>} />  {/* Use element prop */}
          <Route exact path="/home" element={
            <div className="container">
              <TextForm heading="Enter Text to Analyze" btntype={btntype} showAlert={showAlert} mode={textAreaColor} colorText={textColor} textAreaFontColor={colorTextArea} />
            </div>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
