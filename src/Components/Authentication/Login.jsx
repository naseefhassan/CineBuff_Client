/* eslint-disable react/no-unescaped-entities */
import { ErrorMessage, Field, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../Api/axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../../Redux/Jwt';
import * as Yup from 'yup'; 
import view from '../../assets/Images/view.png';
import hide from '../../assets/Images/hide.png';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPass, setShowPass] = useState(false);

    const togglePassword = () => {
        setShowPass((showPass) => !showPass);
    };

    const [error, setError] = useState("");

    const initialValues = {
        email: '',
        password: '',
    };

    // Yup validation schema
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema} 
            onSubmit={async (values) => {
                try {
                    const response = await axiosInstance.post('/login', values);
                    const JWT = response.data.token;
                    localStorage.setItem('jwtToken', JWT);
                    dispatch(setToken(JWT));
                    navigate('/user/add-rationale');
                } catch (error) {
                    if (error.response && error.response.status === 400) {
                        setError('Login Errored');
                    }
                    console.error(error);
                }
            }}
        >
            {({ values, handleSubmit, handleChange }) => (
                <div className="flex justify-center items-center min-h-screen">
                    <div className="w-full mx-3 sm:w-8/12 m-auto sm:flex sm:h-[400px] shadow-xl rounded-xl">
                        <div className="sm:w-1/2 bg-black rounded-xl flex flex-col justify-center">
                            <h1 className="text-center text-3xl text-white font-bold p-4">
                                Looks like you're new here!
                            </h1>
                            <h1 className="p-4 text-gray-300 font-mono">
                                "Get access to your Orders, Wishlist and Recommendations"
                            </h1>
                        </div>

                        <form onSubmit={handleSubmit} className="relative sm:w-1/2 flex flex-col justify-center gap-5 p-5">
                            <h1 className="text-center text-2xl font-bold">LOGIN</h1>

                            {/* Email Field */}
                            <div>
                                <div className="min-h-[20px]"> {/* Fix the height of the error message container */}
                                    <ErrorMessage name="email" component="div" className="error text-red-500 text-xs text-left" />
                                </div>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    values={values.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="p-1 text-center rounded-md border-2 w-full"
                                />
                            </div>

                            {/* Password Field */}
                            <div className="relative">
                                {showPass ? (
                                    <img
                                        onClick={togglePassword}
                                        className="w-5 h-5 absolute right-2 top-7 cursor-pointer"
                                        src={view}
                                        alt="Show Password"
                                    />
                                ) : (
                                    <img
                                        onClick={togglePassword}
                                        className="w-5 h-5 absolute right-2 top-7 cursor-pointer"
                                        src={hide}
                                        alt="Hide Password"
                                    />
                                )}

                                <div>
                                    <div className="min-h-[20px]"> 
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="error text-red-500 text-xs text-left"
                                        />
                                    </div>
                                    <Field
                                        type={showPass ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        values={values.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                        className="p-1 text-center rounded-md border-2 w-full"
                                    />
                                </div>
                            </div>

                            <button type="submit" className="bg-black text-white p-1 font-mono rounded-md">
                                Login
                            </button>

                            <p className="text-red-500 text-center text-[12px]">{error}</p>

                            <p className="text-[12px] text-center">
                                Are you New to Digital? Please{' '}
                                <Link to={'/auth/signup'}>
                                    <span className="text-red-600 cursor-pointer">Signup</span>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            )}
        </Formik>
    );
}

export default Login;
