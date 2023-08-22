import React from "react";
import "./Login.scss";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="Login__Component">
      <div className="left--side">
        <img src="./Assets/mobi.png" alt="Bank Logo" className="bank__logo" />
      </div>

      <div className="right--side">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Welcome Back!</h1>
          <input {...register("example")} placeholder="User" />
          <input
            {...register("exampleRequired", { required: true })}
            placeholder="Password"
          />

          {errors.exampleRequired && <span>This field is required</span>}
          <button type="submit">Login</button>
          <p>
            don't have an account ? <Link className="reg">register</Link>
          </p>

          <span className="recover">
            forget your password? &nbsp;   
            <Link className="reg">Recover</Link>
            </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
