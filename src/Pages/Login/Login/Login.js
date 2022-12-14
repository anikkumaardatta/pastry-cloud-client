import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import loginSVG from "../../../assets/images/login.svg";
import googleLogo from "../../../assets/google30.png";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import usePageTitle from "../../../Hooks/usePageTitle";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  usePageTitle("Login");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.password.value;
    signIn(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        from.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen max-w-5xl mx-auto bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <img
            src={loginSVG}
            className="mt-6 sm:max-w-xs md:max-w-sm lg:max-w-md"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl m-5">
          <form onSubmit={handleSubmitLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <label className="label">
              {error ? (
                <div className="text-red-500">{error}</div>
              ) : (
                <div>
                  New to Pastry Cloud?
                  <Link className="link ml-1 text-rose-600" to="/register">
                    Register now
                  </Link>
                </div>
              )}
            </label>
            <div className="divider">OR</div>
            <div className="form-control">
              <button onClick={handleGoogleSignIn} className="btn btn-ghost">
                <img src={googleLogo} className="px-1" alt="" /> Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
