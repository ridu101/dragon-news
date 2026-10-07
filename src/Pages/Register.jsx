import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const {
        createUser,
        updateUser,
        logOut,
        setUser,
    } = use(AuthContext);

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            // 1. Create Firebase account
            const result = await createUser(email, password);

            const newUser = result.user;

            // 2. Update Firebase profile
            await updateUser({
                displayName: name,
                photoURL: photo,
            });

            // 3. Logout immediately after registration
            await logOut();

            // 4. Make sure local auth state is empty
            setUser(null);

            // 5. Show registration success alert
            const resultAlert = await Swal.fire({
                icon: "success",
                title: "Registration Successful!",
                text: "Your account has been created successfully. Please login to continue.",
                confirmButtonText: "Login Now",
                confirmButtonColor: "#0d9488",
                allowOutsideClick: false,
                allowEscapeKey: false,
            });

            // 6. Go to login page
            if (resultAlert.isConfirmed) {
                navigate("/auth/login");
            }

        } catch (error) {
            console.error("Registration Error:", error);

            // Make sure user is not kept logged in
            try {
                await logOut();
            } catch (logoutError) {
                console.error("Logout Error:", logoutError);
            }

            setUser(null);

            let errorMessage = "Registration failed!";

            if (error.code === "auth/email-already-in-use") {
                errorMessage = "This email is already registered.";
            } else if (error.code === "auth/weak-password") {
                errorMessage = "Password should be at least 6 characters.";
            } else if (error.code === "auth/invalid-email") {
                errorMessage = "Please enter a valid email address.";
            } else if (error.message) {
                errorMessage = error.message;
            }

            Swal.fire({
                icon: "error",
                title: "Registration Failed!",
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
                        Dragon News
                    </p>

                    <h1 className="text-5xl font-bold leading-tight">
                        Stay Informed.
                        <br />
                        Stay Ahead.
                    </h1>

                    <p className="mt-6 text-white/80 leading-7">
                        Join Dragon News and explore the latest stories,
                        breaking news, and trusted journalism from around
                        the world.
                    </p>

                    <div className="mt-10 grid grid-cols-3 gap-4">

                        <div className="bg-white/10 rounded-xl p-4">
                            <p className="text-2xl font-bold">
                                24/7
                            </p>

                            <p className="text-xs text-white/70">
                                News
                            </p>
                        </div>

                        <div className="bg-white/10 rounded-xl p-4">
                            <p className="text-2xl font-bold">
                                100+
                            </p>

                            <p className="text-xs text-white/70">
                                Stories
                            </p>
                        </div>

                        <div className="bg-white/10 rounded-xl p-4">
                            <p className="text-2xl font-bold">
                                1M+
                            </p>

                            <p className="text-xs text-white/70">
                                Readers
                            </p>
                        </div>

                    </div>
                </div>

                {/* Register Form */}
                <div className="p-6 sm:p-10 lg:p-12">

                    <div className="mb-8">

                        <p className="text-secondary font-semibold text-sm">
                            CREATE ACCOUNT
                        </p>

                        <h2 className="text-3xl font-bold mt-2">
                            Welcome to Dragon News
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Create your account and start exploring the news.
                        </p>

                    </div>

                    <form onSubmit={handleRegister}>

                        <fieldset className="space-y-4">

                            {/* Name */}
                            <div>

                                <label className="label font-semibold">
                                    Your Name
                                </label>

                                <input
                                    name="name"
                                    type="text"
                                    required
                                    className="input input-bordered w-full"
                                    placeholder="Enter your full name"
                                />

                            </div>

                            {/* Photo */}
                            <div>

                                <label className="label font-semibold">
                                    Profile Photo URL
                                </label>

                                <input
                                    name="photo"
                                    type="url"
                                    required
                                    className="input input-bordered w-full"
                                    placeholder="https://example.com/photo.jpg"
                                />

                            </div>

                            {/* Email */}
                            <div>

                                <label className="label font-semibold">
                                    Email
                                </label>

                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="input input-bordered w-full"
                                    placeholder="Enter your email"
                                />

                            </div>

                            {/* Password */}
                            <div>

                                <label className="label font-semibold">
                                    Password
                                </label>

                                <input
                                    name="password"
                                    type="password"
                                    required
                                    className="input input-bordered w-full"
                                    placeholder="Create a password"
                                />

                            </div>

                            {/* Register Button */}
                            <button
                                type="submit"
                                className="btn btn-secondary text-white w-full mt-3"
                            >
                                Create Account
                            </button>

                            {/* Login */}
                            <p className="text-center text-sm text-gray-500 pt-3">

                                Already have an account?

                                <Link
                                    className="font-bold text-secondary ml-1 hover:underline"
                                    to="/auth/login"
                                >
                                    Login Now
                                </Link>

                            </p>

                        </fieldset>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default Register;