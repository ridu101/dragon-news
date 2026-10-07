// import React from 'react';

import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    // send the email and password 
    const {createUser, setUser} = use(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log("btn clicked", name, photo, email, password);

        createUser(email, password)
            .then(result =>{
                // console.log(result.user)
                setUser(result.user)
            })
            .catch( error =>{
                console.log(error)
            })
    };
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-[80px] mb-20 mt-10 " >New to Dragon News ! </h1>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label font-bold  text-black">Your Name</label>
                        <input name="name" type="text" required className="input" placeholder="Your Name" />
                        {/* photo Url */}
                        <label className="label font-bold text-black">Photo Url</label>
                        <input name="photo" type="text" required className="input" placeholder="Enter Your Photo Url" />
                        {/* email */}
                        <label className="label font-bold text-black">Email</label>
                        <input name="email" type="email" required className="input" placeholder="Enter Your Email" />
                        {/* password */}
                        <label className="label font-bold text-black">Password</label>
                        <input name="password" type="password" required className="input" placeholder="Enter Your Password" />
                      
                        <button type="submit" className="btn btn-neutral mt-4">Register Now</button>
                        {/* login-btn */}
                        <p className="flex justify-center gap-1">Already Have An Account ? <Link className="font-semibold text-secondary" to="/auth/login"> Login Now</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;