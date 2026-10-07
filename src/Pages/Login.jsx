
import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Login = () => {
    const { signIn, resetPassword } = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const [loginError, setLoginError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        setLoginError("");

        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then(() => {
                toast.success("Login successful!");

                navigate(
                    `${location.state ? location.state : "/"} `
                );
            })
            .catch((error) => {
                console.error(error);

                let errorMessage = "Login failed!";

                if (
                    error.code === "auth/invalid-credential" ||
                    error.code === "auth/wrong-password" ||
                    error.code === "auth/user-not-found"
                ) {
                    errorMessage =
                        "Invalid email or password. Please try again.";
                } else if (error.code === "auth/invalid-email") {
                    errorMessage =
                        "Please enter a valid email address.";
                } else if (error.code === "auth/too-many-requests") {
                    errorMessage =
                        "Too many failed attempts. Please try again later.";
                } else if (error.message) {
                    errorMessage = error.message;
                }

                setLoginError(errorMessage);
            });
    };

    // Forgot Password
    const handleForgotPassword = async () => {
        const result = await Swal.fire({
            title: "Forgot Password?",
            text: "Enter your registered email address.",
            input: "email",
            inputPlaceholder: "Enter your email",
            inputAttributes: {
                autocapitalize: "off",
                autocorrect: "off",
            },
            showCancelButton: true,
            confirmButtonText: "Send Reset Link",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#0d9488",
            inputValidator: (value) => {
                if (!value) {
                    return "Please enter your email address.";
                }
            },
        });

        if (!result.isConfirmed) {
            return;
        }

        const email = result.value.trim();

        // Show loading
        Swal.fire({
            title: "Sending Reset Link...",
            text: "Please wait a moment.",
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });


        try {
            await resetPassword(email);

            await Swal.fire({
                icon: "success",
                title: "Reset Link Sent!",
                text: `Password reset instructions have been sent to ${email}. Please check your inbox and spam folder.`,
                confirmButtonText: "OK",
                confirmButtonColor: "#0d9488",
            });
        }



        catch (error) {
            console.error("Password Reset Error:", error);

            let errorMessage =
                "Unable to send password reset email.";

            if (error.code === "auth/user-not-found") {
                errorMessage =
                    "No account was found with this email address.";
            } else if (error.code === "auth/invalid-email") {
                errorMessage =
                    "Please enter a valid email address.";
            } else if (error.code === "auth/too-many-requests") {
                errorMessage =
                    "Too many requests. Please try again later.";
            } else if (error.message) {
                errorMessage = error.message;
            }

            Swal.fire({
                icon: "error",
                title: "Reset Failed!",
                text: errorMessage,
                confirmButtonColor: "#d33",
            });
        }
    };

    return (
        <div className="min-h-[calc(100vh-80px)] bg-base-200 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-base-100 rounded-2xl shadow-2xl overflow-hidden">

                {/* Left Side */}
                <div className="hidden lg:flex bg-secondary text-white p-12 flex-col justify-center">
                    <p className="text-sm font-semibold uppercase tracking-widest mb-4">
                        Welcome Back
                    </p>

                    <h1 className="text-5xl font-bold leading-tight">
                        Your News.
                        <br />
                        Your World.
                    </h1>

                    <p className="mt-6 text-white/80 leading-7">
                        Login to your Dragon News account and continue reading
                        the latest stories from around the world.
                    </p>

                    <div className="mt-10">
                        <div className="border border-white/20 rounded-xl p-5 bg-white/10">
                            <p className="text-lg font-semibold">
                                Journalism Without Fear or Favour
                            </p>

                            <p className="text-sm text-white/70 mt-2">
                                Trusted stories. Reliable information. One place.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Login Form */}
                <div className="p-6 sm:p-10 lg:p-12">

                    <div className="mb-8">
                        <p className="text-secondary font-semibold text-sm">
                            LOGIN
                        </p>

                        <h2 className="text-3xl font-bold mt-2">
                            Login to your account
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Enter your credentials to continue.
                        </p>
                    </div>

                    <form onSubmit={handleLogin}>
                        <fieldset className="space-y-4">

                            {/* Email */}
                            <div>
                                <label className="label font-semibold">
                                    Email
                                </label>

                                <input
                                    name="email"
                                    type="email"
                                    className="input input-bordered w-full"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <div className="flex items-center justify-between">

                                    <label className="label font-semibold">
                                        Password
                                    </label>

                                    <button
                                        type="button"
                                        onClick={handleForgotPassword}
                                        className="text-xs text-secondary font-semibold hover:underline"
                                    >
                                        Forgot password?
                                    </button>

                                </div>

                                <input
                                    name="password"
                                    type="password"
                                    className="input input-bordered w-full"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            {/* Error */}
                            {loginError && (
                                <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                                    <p className="text-sm font-semibold text-red-600">
                                        {loginError}
                                    </p>
                                </div>
                            )}

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="btn btn-secondary text-white w-full mt-3"
                            >
                                Login
                            </button>

                            {/* Register */}
                            <p className="text-center text-sm text-gray-500 pt-3">
                                Don't have an account?

                                <Link
                                    className="font-bold text-secondary ml-1 hover:underline"
                                    to="/auth/register"
                                >
                                    Register Now
                                </Link>
                            </p>

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

