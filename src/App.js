import "./App.css";
import AddForm from "./Components/AddForm";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Alert from "./Components/Alert";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const colors = ["red", "#191970", "#FF5733", "#301934", "#900C3F"];

  const [mode, setMode] = useState("light");
  const toggleChange = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#262B26";
      showAlert("Sucess", "Dark mode has been Enabled");
      document.title = "TextUtils/dark-mode"; // title set *******
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Sucess", "Light mode has been Enabled");
      document.title = "TextUtils/light-mode";
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const theme = (item) => {
    document.body.style.backgroundColor = `${item}`;      //*
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          mode={mode}
          toggleChange={toggleChange}
          colors={colors}
          theme={theme}
        />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/addform" element={<AddForm mode={mode} showAlert={showAlert}/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
