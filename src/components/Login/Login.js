import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="div">

            <div className="login-box m-auto" id="login-box">
                <div className="card mt-5">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in </p>
                        <form action="../../index3.html" method="post">
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember" />
                                        <label htmlFor="remember">
                                            Remember Me
              </label>
                                    </div>
                                </div>
                                {/* /.col */}
                                <div className="col-6 ">
                                    <a href="forgot-password.html"><span className="text-warning">Forgot password</span> </a>
                                </div>
                                {/* /.col */}
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <a href="#" className="btn btn-block btn-success">
                                        <i className="fab fa-google-plus mr-2" /> Log in
        </a>
                                </div>
                            </div>
                        </form>
                        <div className="social-auth-links text-center mb-3">
                            <p>- OR -</p>
                            <a href="#" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2" /> Sign in using Facebook
        </a>
                            <a href="#" className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2" /> Sign in using Google+
        </a>
                        </div>
                        {/* /.social-auth-links */}
                        <p className="mb-1">

                        </p>
                        <p className="mb-0 text-center ">
                            Don't have an account?<a href="register.html" className="text-warning">Create an account</a>
                        </p>
                    </div>
                    {/* /.login-card-body */}
                </div>
            </div>

            <div className="register-box m-auto" id="register-box">
                <div className="register-logo">
                    <a href="../../index2.html"><b>Admin</b>LTE</a>
                </div>
                <div className="card mt-5">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Register a new account</p>
                        <form action="../../index.html" method="post">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Full name" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Retype password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                                        <label htmlFor="agreeTerms">
                                            I agree to the <a href="#">terms</a>
                                        </label>
                                    </div>
                                </div>
                                {/* /.col */}
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                                </div>
                                {/* /.col */}
                            </div>
                        </form>
                        <div className="social-auth-links text-center">
                            <p>- OR -</p>
                            <a href="#" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2" />
                                Sign up using Facebook
                            </a>
                            <a href="#" className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2" />
                                Sign up using Google+
                            </a>
                        </div>
                        Already have an account? <a href="" className="text-center text-warning">Login</a>
                    </div>
                    {/* /.form-box */}
                </div>{/* /.card */}
            </div>
        </div>
    );
};

export default Login;