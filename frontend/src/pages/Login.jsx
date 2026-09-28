import { useForm } from "react-hook-form";
import useApi from "../utils/axiosInstance.utils";

const Login = ()  => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const api = useApi();

  const onSubmit = (data) => {
  
    try {
      
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Login to your account to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <a
                href="/forgot-password"
                className="text-sm font-medium text-gray-600 hover:text-black"
              >
                Forgot password?
              </a>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800 active:scale-[0.99] cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-semibold text-black hover:underline"
          >
            Create account
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;