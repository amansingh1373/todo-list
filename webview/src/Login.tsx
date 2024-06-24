import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth  } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const user1 = auth.currentUser;
  console.log(user1)

  const handleEmailPasswordSignIn = async () => {
    try {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User logged in:', user);
            console.log('before navigate');
            navigate('/todolist');
            console.log('after navigate');
        })
        .catch((error) => {
          console.log('Error during Email/Password Sign-In', error.message)
        });
    } catch (error) {
        console.error('Error during Email/Password Sign-In', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div>
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <button onClick={handleEmailPasswordSignIn}>Login</button>
    </div>
  );
}

export default Login;
