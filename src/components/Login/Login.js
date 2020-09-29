import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';



function Login() {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isAuthenticated: false,
        name: '',
        email: '',
        password: '',
        photoUrl: ''
    });

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true);
            })

    }

    const handleResponse = (res, redirect) => {
        // console.log(res)
        setUser({...user,...res});
        setLoggedInUser({...loggedInUser,...res});
        if (redirect) {
            history.replace(from);
        }
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
         
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
       console.log(newUser,user)
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        if (!newUser && user.email && user.password) {
            
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();
    }

console.log(loggedInUser.email)

    return (
        <div className="card login-box mx-auto">
            <div className="card-body login-card-body">
                <p className="login-box-msg">Sign in</p>

                <form onSubmit={handleSubmit}>
                    {newUser &&
                        <div className="input-group mb-3">
                            <input className="form-control" name="name" type="text" onBlur={handleBlur} placeholder="Your name" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>
                    }
                    <div className="input-group mb-3">
                        <input className="form-control" type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required />
                        <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-envelope" />
                            </div>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input className="form-control" type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required />
                        <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-lock" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <div className="icheck-primary">
                                <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="newUser" />
                                <label htmlFor="newUser">
                                    &nbsp;Register new user
                                </label>
                            </div>
                        </div>
                        <div className="col-4">
                            <input className="btn btn-primary" type="submit" value={newUser ? 'Sign up' : 'Sign in'} />
                        </div>
                    </div>
                </form>
                <div className="social-auth-links text-center mb-3">
                    <p>- OR -</p>
                    <button onClick={fbSignIn} className="btn btn-block btn-primary">
                        <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                </button>
                    <button onClick={googleSignIn} type="button" className="btn btn-block btn-danger">
                        <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                </button>
                </div>

                
                <p className="mb-1" style={{ color: 'red' }}>{user.error}</p>
                {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
            </div>
        </div>
    );
}

export default Login;
