import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('')
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json()
      if (data.success) {
        window.location.href = data.redirect;
      }
      else {
        setErrorMsg(data.message);
      }
    }
    catch (err) {
      console.error("Network error:", err);
      setErrorMsg("Failed to connect to server.");
    }
  }

  return (

    <div style={styles.container}>
      <h2 className='text-2xl font-bold   py-3'>Login form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" className='border-1 border-gray-500 p-2 rounded' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <div className='relative '>
          <input type={showPassword?"text":"password"} className='border-1 border-gray-500 p-2 rounded w-[100%]' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <span className='absolute' style={{position: 'absolute',
          right: '8px',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer'}} onClick={() => setShowPassword(!showPassword)}>
          {showPassword?<FaEye />:<FaEyeSlash />}
          </span>
        </div>
        <button type='submit' className='border p-2 border-gray-500 rounded hover:cursor-pointer transition duration-300 font-bold hover:bg-teal-50 hover:text-black'>Submit</button>
        {errorMsg && <p style={styles.error}>{errorMsg}</p>}
      </form>
    </div>
  )
}
const styles = {
  container: {
    width: '100%',
    maxWidth: '400px',
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontFamily: 'Arial'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
  },
  error: {
    color: 'red',
    fontSize: '14px'
  }
};
export default Login