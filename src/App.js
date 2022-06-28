import "./App.css";
import Axios from "axios";
import { useState } from 'react';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Gallery from "./pages/Gallery";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  const [emailReg, setEmailReg] = useState('');
  const [firstNameReg, setFirstNameReg] = useState('');
  const [lastNameReg, setLastNameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [cPasswordReg, setCPasswordReg] = useState('');
  const [phoneReg, setPhoneReg] = useState('');
  const [addressReg, setAddressReg] = useState('');
  const [isAdminReg, setIsAdminReg] = useState(false);
  const [RegInfo, setRegInfo] = useState('');

  const [emailLog, setEmailLog] = useState('');
  const [passwordLog, setPasswordLog] = useState('');
  const [logInfo, setLogInfo] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [preview, setPreview] = useState();

  const API_URL = process.env.REACT_APP_API_URL;

  const handleRegister = () => {
    if (emailReg && firstNameReg && lastNameReg && passwordReg && phoneReg && addressReg) {
      if (passwordReg === cPasswordReg) {
        Axios.post(`${API_URL}auth/signup`,
          {
            email: emailReg,
            firstname: firstNameReg,
            lastname: lastNameReg,
            password: passwordReg,
            phone: phoneReg,
            address: addressReg,
            isadmin: isAdminReg
          }).then((response) => {
            console.log(response)

            if (response.data.auth) {
              setIsLoggedIn(true);
              sessionStorage.setItem("apextoken", response.data.data.token)
            } else {
              setIsLoggedIn(false);
            }
          });
      } else {
        setRegInfo('Passwords do not match!!!');
      }
    } else {
      setRegInfo('Please fill out all the fields...');
    }
    // setEmailReg('');
    // setFirstNameReg('');
    // setLastNameReg('');
    // setPasswordReg('');
    // setCPasswordReg('');
    // setPhoneReg('');
    // setAddressReg('');
    // setIsAdminReg(false);   
  }

  const handleLogin = () => {
    if (emailLog && passwordLog) {
      Axios.post(`${API_URL}auth/signin`, {
        email: emailLog,
        password: passwordLog
      }).then((response) => {
        console.log(response)

        if (response.data.auth) {
          setIsLoggedIn(true);
          sessionStorage.setItem("apextoken", response.data.data.token)
        } else {
          setIsLoggedIn(false);
        }
      });
    } else {
      setLogInfo('Please fill out all the fields...');
    }
  }

  const handleDelete = () => {
    Axios.delete(`${API_URL}deleteuser`,
      {
        headers: {
          "x-access-token": sessionStorage.getItem("apextoken"),
          "email": emailLog,
          "password": passwordLog,
        }
      }).then((response) => {
        console.log(response)
      });
  }

  const handleResetPassword = () => {
    Axios.patch(`${API_URL}resetpassword`,
      {
        password: "08145092860Aa",
        newpassword: "12345",
        headers: {
          "x-access-token": sessionStorage.getItem("apextoken")
        }
      }).then((response) => {
        console.log(response);
      });
  }

  const handlePostProperty = () => {
    if (preview) {
      Axios.post(`${API_URL}property`,
        {
          status: "available",
          price: 4429.99,
          state: "Edo",
          city: "Benin",
          address: "2345, edo",
          type: "3 bedroom",
          imagedata: preview,
          headers: {
            "x-access-token": sessionStorage.getItem("apextoken")
          }
        }).then((response) => {
          console.log(response)
        });
    } else {
      console.error('please, select an image')
    }
  }

  const handleUpdateProperty = () => {
    if (preview) {
      Axios.patch(`${API_URL}property/102`,
        {
          status: "available",
          price: 15329.58,
          state: "Benin",
          city: "Ikeja",
          address: "25, odogwu",
          type: "95 bedroom",
          imagedata: preview,
          headers: {
            "x-access-token": sessionStorage.getItem("apextoken")
          }
        }).then((response) => {
          console.log(response);
        });
    } else {
      console.error('please, select an image')
    }
  }

  const handleSoldProperty = () => {
    Axios.patch(`${API_URL}property/99/sold`,
      {
        status: "sold",
        headers: {
          "x-access-token": sessionStorage.getItem("apextoken")
        }
      }).then((response) => {
        console.log(response);
      });
  }

  const handleDeleteProperty = () => {
    Axios.delete(`${API_URL}property/95`,
      {
        headers: {
          "x-access-token": sessionStorage.getItem("apextoken")
        }
      }).then((response) => {
        console.log(response);
      });
  }

  const handleGetPropertyID = () => {
    Axios.get(`${API_URL}property/99`,
      {
        headers: {
          "x-access-token": sessionStorage.getItem("apextoken")
        }
      }).then((response) => {
        console.log(response);
      });
  }

  const handleGetAllProperties = () => {
    Axios.get(`${API_URL}property`,
      {
        headers: {
          "x-access-token": sessionStorage.getItem("apextoken")
        }
      }).then((response) => {
        console.log(response);
      });
  }

  const handleGetPropertyType = () => {
    Axios.get(`${API_URL}property/search?type=48 bedroom`,
      {
        headers: {
          "x-access-token": sessionStorage.getItem("apextoken")
        }
      }).then((response) => {
        console.log(response);
      });
  }

  const handleReportProperty = () => {
    Axios.post(`${API_URL}property/95/report`, {
      reason: "fraudulent dude",
      description: "dude scams people all the time",
      headers: {
        "x-access-token": sessionStorage.getItem("apextoken")
      }
    }).then((response) => {
      console.log(response)
    })
  }

  return (
    <div className="App_main">
      <Router>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <ul style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            fontSize: "18px"
          }}>
            <li style={{ padding: "10px", listStyle: "none" }}><Link to={'/signup'}>Register</Link></li>
            <li style={{ padding: "10px", listStyle: "none" }}><Link to={'/login'}>Login</Link></li>
            <li style={{ padding: "10px", listStyle: "none" }}><Link to={'/gallery'}>Gallery</Link></li>
          </ul>
          <p style={{
            textAlign: 'center',
            maxWidth: '85%'
          }}>This WebApp makes use of MySQL for database management, Node JS for backend (Express), React JS for front-end and Cloudinary for Image Storage.
          </p>
          <p style={{
            textAlign: 'center',
            color: 'red',
            maxWidth: '85%'
          }}>Please Note, that this source code is configured for localhost use. Also, this project is designed mainly for testing the REST API logic not for design.
          </p>
        </div>
        <Routes>
          <Route path='/signup' element={
            <Register
              emailReg={emailReg} setEmailReg={setEmailReg} firstNameReg={firstNameReg} setFirstNameReg={setFirstNameReg} lastNameReg={lastNameReg} setLastNameReg={setLastNameReg} passwordReg={passwordReg} setPasswordReg={setPasswordReg} cPasswordReg={cPasswordReg} setCPasswordReg={setCPasswordReg} phoneReg={phoneReg} setPhoneReg={setPhoneReg} addressReg={addressReg} setAddressReg={setAddressReg} isAdminReg={isAdminReg} setIsAdminReg={setIsAdminReg} handleRegister={handleRegister} regInfo={RegInfo}
            />
          }>
          </Route>
          <Route path='/login' element={
            <Login
              emailLog={emailLog} setEmailLog={setEmailLog} passwordLog={passwordLog} setPasswordLog={setPasswordLog} handleLogin={handleLogin} handleDelete={handleDelete} logInfo={logInfo} isLoggedIn={isLoggedIn} Request1={handleGetPropertyID} Request2={handleGetAllProperties} Request3={handleGetPropertyType} Request4={handleReportProperty} Request5={handleSoldProperty} Request6={handlePostProperty} Request7={handleDeleteProperty} Request8={handleUpdateProperty} Request9={handleResetPassword}
            />
          }>
          </Route>
          <Route path="gallery" element={
            <Gallery
              preview={preview} setPreview={setPreview} handlePostProperty={handlePostProperty} handleUpdateProperty={handleUpdateProperty}
            />
          }>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
