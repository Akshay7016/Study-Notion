import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const changeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <div>
      {/* Student-Instructor tab */}
      <div>
        <button>
          Student
        </button>
        <button>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* first name and last name */}
        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>

            <input
              required
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={changeHandler}
              placeholder="Enter first name"
            />
          </label>

          <label>
            <p>
              Last Name<sup>*</sup>
            </p>

            <input
              required
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={changeHandler}
              placeholder="Enter last name"
            />
          </label>
        </div>

        {/* email address */}
        <label>
          <p>
            Email Address<sup>*</sup>
          </p>

          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email address"
          />
        </label>

        {/* password and confirm password */}
        <div>
          <label>
            <p>
              Create Password<sup>*</sup>
            </p>

            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password"
            />

            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>

            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm Password"
            />

            <span onClick={() => setShowConfirmPassword(!showPassword)}>
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button>
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm