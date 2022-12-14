import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import registerSVG from "../../../assets/images/register.svg";
import googleLogo from "../../../assets/google30.png";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import usePageTitle from "../../../Hooks/usePageTitle";

const Register = () => {
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  usePageTitle("Register");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");

  const handleSubmitRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const pass = form.password.value;
    createUser(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log(name);
        updateUser(name, photo)
          .then(() => {
            form.reset();
          })
          .catch((error) => {
            // An error occurred
            setError(error.message);
            // ...
          });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
    form.reset();
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen max-w-5xl mx-auto bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <img
            src={registerSVG}
            className="mt-6 sm:max-w-md md:max-w-lg lg:max-w-xl"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl m-5">
          <form onSubmit={handleSubmitRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="PhotoURL"
                className="input input-bordered"
              />
            </div>
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
                Register
              </button>
            </div>
            <label className="label">
              <div>
                {error ? (
                  <div className="text-red-500">{error}</div>
                ) : (
                  <div>
                    Already have an account?
                    <Link className="link ml-1 text-rose-600" to="/login">
                      Login now
                    </Link>
                  </div>
                )}
              </div>
            </label>
            <div className="divider">OR</div>
          </form>
          <div className="form-control">
            <button onClick={handleGoogleSignIn} className="btn btn-ghost">
              <img src={googleLogo} className="px-1" alt="" /> Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
