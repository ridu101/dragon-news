// import React from 'react';

import { Link } from "react-router";

const Register = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-[80px] mb-20 mt-10 " >New to Dragon News ! </h1>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                <div className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label font-bold text-black">Your Name</label>
                        <input type="text" className="input" placeholder="Your Name" />
                        {/* photo Url */}
                        <label className="label font-bold text-black">Photo Url</label>
                        <input type="text" className="input" placeholder="Enter Your Photo Url" />
                        {/* email */}
                        <label className="label font-bold text-black">Email</label>
                        <input type="email" className="input" placeholder="Enter Your Email" />
                        {/* password */}
                        <label className="label font-bold text-black">Password</label>
                        <input type="password" className="input" placeholder="Enter Your Password" />
                      
                        <button className="btn btn-neutral mt-4">Register Now</button>
                        {/* login-btn */}
                        <p className="flex justify-center gap-1">Already Have An Account ? <Link className="font-semibold text-secondary" to="/auth/login"> Login Now</Link></p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Register;