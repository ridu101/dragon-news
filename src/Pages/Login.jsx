import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const { signIn } = use(AuthContext);

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then((result) => {
                console.log("Sign in successful:", result.user);
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
                alert(error.message);
            });
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-[80px] mb-30 mt-10">
                Welcome You To The Dragon News
            </h1>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-2xl font-semibold text-center">
                    Login your account
                </h2>

                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">

                        <label className="label font-bold text-black">
                            Email
                        </label>

                        <input
                            name="email"
                            type="email"
                            className="input"
                            placeholder="Enter Your Email"
                        />

                        <label className="label font-bold text-black">
                            Password
                        </label>

                        <input
                            name="password"
                            type="password"
                            className="input"
                            placeholder="Enter Your Password"
                        />

                        <div>
                            <a className="link link-hover">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-neutral mt-4"
                        >
                            Login
                        </button>

                        <p className="flex justify-center gap-1">
                            Don't Have An Account?
                            <Link
                                className="font-semibold text-secondary"
                                to="/auth/register"
                            >
                                Register
                            </Link>
                        </p>

                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;