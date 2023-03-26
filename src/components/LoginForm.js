import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { toast } from 'react-hot-toast';

const LoginForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const changeHandler = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

    return (
        <form
            onSubmit={submitHandler}
            className="w-full flex flex-col gap-4 mt-6"
        >
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

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Password<sup className='text-pink-200'>*</sup>
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
                        <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> :
                        <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                </span>

                <Link to="#">
                    <p className='text-xs mt-1 text-blue-100 absolute right-0'>
                        Forgot Password
                    </p>
                </Link>
            </label>

            <button className='mt-11 bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]'>
                Sign in
            </button>
        </form>
    )
}

export default LoginForm