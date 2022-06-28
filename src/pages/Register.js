import React from 'react';
import './Register.css';

const Register = ({
  emailReg,
  setEmailReg,
  firstNameReg,
  setFirstNameReg,
  lastNameReg,
  setLastNameReg,
  passwordReg,
  setPasswordReg,
  cPasswordReg,
  setCPasswordReg,
  phoneReg,
  setPhoneReg,
  addressReg,
  setAddressReg,
  isAdminReg,
  setIsAdminReg,
  handleRegister,
  regInfo
}) => {

  return (
    <div className='register_main'>
      <form className='register_form' onSubmit={(e) => { e.preventDefault() }}>
        <h1>Register</h1>

        <input
          type={'email'}
          placeholder={'Email'}
          required
          value={emailReg}
          onChange={(e) => setEmailReg(e.target.value)}
        />

        <input
          type={'text'}
          placeholder={'Firstname'}
          required
          value={firstNameReg}
          onChange={(e) => setFirstNameReg(e.target.value)}
        />

        <input
          type={'text'}
          placeholder={'Lastname'}
          required
          value={lastNameReg}
          onChange={(e) => setLastNameReg(e.target.value)}
        />

        <input
          type={'password'}
          placeholder={'Password'}
          required
          value={passwordReg}
          onChange={(e) => setPasswordReg(e.target.value)}
        />

        <input
          type={'password'}
          placeholder={'Confirm Password'}
          required
          value={cPasswordReg}
          onChange={(e) => setCPasswordReg(e.target.value)}
        />

        <input
          type={'number'}
          placeholder={'Phone'}
          required
          value={phoneReg}
          onChange={(e) => setPhoneReg(e.target.value)}
        />

        <input
          type={'text'}
          placeholder={'Address'}
          required
          value={addressReg}
          onChange={(e) => setAddressReg(e.target.value)}
        />

        <p>Is Admin?</p>

        <input
          type={'checkbox'}
          placeholder={'Admin?'}
          required
          checked={isAdminReg}
          // value={isAdminReg}
          onChange={() => setIsAdminReg(!isAdminReg)}
        />

        <button
          type="button"
          onClick={handleRegister}
        >
          Register
        </button>
        {regInfo === "Sorry, this account already exists!!!" | "Passwords do not match!!!" | "Please fill out all the fields..." ?
          <h5 style={{ color: 'red' }}>{regInfo}</h5> :
          <h5 style={{ color: 'black' }}>{regInfo}</h5>
        }
      </form>
    </div>
  )
}

export default Register;