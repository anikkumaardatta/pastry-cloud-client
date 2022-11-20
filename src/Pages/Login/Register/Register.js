import React, { useContext } from "react";
import { Link } from "react-router-dom";
import registerSVG from "../../../assets/images/register.svg";
import googleLogo from "../../../assets/google30.png";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
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
            // Profile updated!
            console.log("Updated");
            // ...
          })
          .catch((error) => {
            // An error occurred
            console.log(error);
            // ...
          });
      })
      .catch((error) => {
        console.error(error);
      });
    form.reset();
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
                Already have an account?
                <Link className="link ml-1 text-rose-600" to="/login">
                  Login now
                </Link>
              </div>
            </label>
            <div className="divider">OR</div>
            <div className="form-control">
              <button className="btn btn-ghost">
                <img src={googleLogo} className="px-1" alt="" /> Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
