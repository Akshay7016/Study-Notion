import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");
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
    const finalData = { ...formData, accountType };
    console.log(finalData);
    navigate("/dashboard");
  }

  return (
    <div>
      {/* Student-Instructor tab */}
      <div className='flex bg-richblack-800 p-1 gap-1 my-6 rounded-full w-max'>
        <button
          className={`${accountType === "student" ?
            "bg-richblack-900 text-richblack-5" :
            "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${accountType === "instructor" ?
            "bg-richblack-900 text-richblack-5" :
            "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        >
          Instructor
        </button>
      </div>

      <form
        onSubmit={submitHandler}
        className="w-full flex flex-col gap-4 mt-6"
      >
        {/* first name and last name */}
        <div className='flex gap-4'>
          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              First Name<sup className='text-pink-200'>*</sup>
            </p>

            <input
              required
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={changeHandler}
              placeholder="Enter first name"
              className='w-full bg-richblack-800 rounded-[8px] text-richblack-5 p-[12px]
                    border-b-[0.5px] border-gray-600'
            />
          </label>

          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Last Name<sup className='text-pink-200'>*</sup>
            </p>

            <input
              required
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={changeHandler}
              placeholder="Enter last name"
              className='w-full bg-richblack-800 rounded-[8px] text-richblack-5 p-[12px]
                    border-b-[0.5px] border-gray-600'
            />
          </label>
        </div>

        {/* email address */}
        <label className='w-full'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Email Address<sup className='text-pink-200'>*</sup>
          </p>

          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email address"
            className='w-full bg-richblack-800 rounded-[8px] text-richblack-5 p-[12px]
                    border-b-[0.5px] border-gray-600'
          />
        </label>

        {/* password and confirm password */}
        <div className='flex gap-4'>
          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Create Password<sup className='text-pink-200'>*</sup>
            </p>

            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password"
              className='w-full bg-richblack-800 rounded-[8px] text-richblack-5 p-[12px]
                    border-b-[0.5px] border-gray-600'
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] cursor-pointer"
            >
              {showPassword ?
                <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />
                : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
            </span>
          </label>

          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Confirm Password<sup className='text-pink-200'>*</sup>
            </p>

            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm Password"
              className='w-full bg-richblack-800 rounded-[8px] text-richblack-5 p-[12px]
                    border-b-[0.5px] border-gray-600'
            />

            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-[38px] cursor-pointer"
            >
              {showConfirmPassword ?
                <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> :
                <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
            </span>
          </label>
        </div>

        <button className='mt-6 bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]'>
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm