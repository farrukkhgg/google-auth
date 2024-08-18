import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './login.css';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../server/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate()

  const signInWithGoogle = () =>{
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      if(result.user){
        navigate('/home')
      }
    })
  }


  return (
    <main>
      <div className="overall">
        <div className="first-child">
          <div className="second-child">
            <div className="third-child">
              <div className="fourth-child">
                <button className='signIn' onClick={signInWithGoogle}>
                  <FontAwesomeIcon icon={faGoogle} style={{ fontSize: '40px', color: 'crimson' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
