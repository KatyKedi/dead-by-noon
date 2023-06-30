
import { useState } from 'react';

export default function Login() {
  const defForm = { username:"", password: ""};
  const [formData, setFormData] = useState(defForm);
  // const [loginStatus, setLoginStatus] = useState("");

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //  const query = await fetch("", {
  //   method: "post",
  //   body: JSON.stringify(formData),
  //   headers: {
  //     "Content-Type" : "application/json"
  //   },
  //  }); 
  //  const result = await query.json();
  //  if (result && result.payload) {
  //   window.location.href = "/"
  //  } else {
  //   setLoginStatus ("fail");
  //  }
  // }

  return (
    <div className="Login">
      <h1>Login</h1>
      <form>
        <label>Username:</label>
        <input type="text" name="username" value= {formData.username} onChange= {handleInputChange} />
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        <button onClick= {handleFormSubmit} >Submit</button>
      </form>
      {/* {loginResult === "success" && (
        <div className="alert alert-success" role="alert">
          Login successful!
        </div>
      )}

      {loginResult === "fail" && (
        <div className="alert alert-danger" role="alert">
          Login failed!
        </div>
      )} */}
    </div>
  )
}
