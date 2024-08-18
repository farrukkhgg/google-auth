import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Redirect to login page after logout
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <section>
      <h1>Congratolations!</h1>
      <p>You have signed in to our website succesfully!</p>
      <button className='logOut' onClick={handleLogout}>Log Out</button>
    </section>
  );
};

export default Home;
