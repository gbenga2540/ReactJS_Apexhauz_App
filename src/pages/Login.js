import React from 'react';
import './Login.css';

const Login = ({
  emailLog,
  setEmailLog,
  passwordLog,
  setPasswordLog,
  handleLogin,
  handleDelete,
  logInfo, isLoggedIn, Request1, Request2, Request3, Request4, Request5, Request6, Request7, Request8, Request9 }) => {

  return (
    <div className='login_main'>
      <form className='login_form' onSubmit={(e) => { e.preventDefault() }}>
        <h1>Login</h1>
        <input
          type={'email'}
          placeholder={'email'}
          required
          value={emailLog}
          onChange={(e) => setEmailLog(e.target.value)}
        />
        <input
          type={'password'}
          placeholder={'password'}
          required
          value={passwordLog}
          onChange={(e) => setPasswordLog(e.target.value)}
        />
        <button
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          type="button"
          onClick={handleDelete}
        >
          Delete User
        </button>
        {logInfo === "This account does not exist!!!" | "Please fill out all the fields..." ?
          <h5 style={{ color: 'red' }}>{logInfo}</h5> :
          <h5 style={{ color: 'black' }}>{logInfo}</h5>
        }
        {isLoggedIn && <button type='button' onClick={Request1}>
          fetch property by id
        </button>
        }
        {isLoggedIn && <button type='button' onClick={Request2}>
          fetch all properties
        </button>
        }
        {isLoggedIn && <button type='button' onClick={Request3}>
          fetch property by type
        </button>
        }
        {isLoggedIn && <button type='button' onClick={Request4}>
          report property
        </button>
        }
        {isLoggedIn && <button type='button' onClick={Request5}>
          sold property
        </button>
        }
        {isLoggedIn && <button type='button' onClick={Request6}>
          post property
        </button>
        }
        {isLoggedIn && <button type='button' onClick={Request7}>
          delete property
        </button>
        }
        {isLoggedIn && <button type='button' onClick={Request8}>
          update property
        </button>
        }
        {isLoggedIn && <button type='button' onClick={Request9}>
          reset password
        </button>
        }
      </form>
    </div>
  )
}

export default Login;