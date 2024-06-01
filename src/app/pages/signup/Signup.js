import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { ImageUpload } from "../../utils/Images";

const Register = () => {
  const { GoogleLogin, user, setUser, CreateUser, Updateuser, loading } =
    useAuth();
  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogle = () => {
    GoogleLogin()
      .then((res) => {
        toast.success("login successfully");
        navigate(from);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const onSubmit = async (data) => {
    const { name, email, password, image } = data;
    const photourl = await ImageUpload(image[0]);
    try {
      const result = await CreateUser(email, password);
      await Updateuser(name, photourl);
      setUser({ ...result?.user, photoURL: photourl, displayName: name });

      toast.success("user created successfully");
      navigate(from, { replace: true });
    } catch (e) {
      toast.error(e.message);
    }
  };

  if (user && loading) return;

  return (
    <div className="py-16">
      <div className="w-full max-w-sm md:max-w-md p-6 m-auto mx-auto bg-gray-100 rounded-lg shadow-md ">
        <div className="flex justify-center mx-auto">
          <p className="text-center font-bold py-1 text-2xl  ">Register</p>
        </div>

        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-base text-gray-800 ">Name</label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register("name", { required: true })}
            />
            {errors?.name?.type === "required" && (
              <p className="text-red-600 text-sm mt-[1px]">
                This field is required
              </p>
            )}
          </div>
          <div className="mt-4">
            <label className="block text-base text-gray-800  ">Email</label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register("email", { required: true })}
            />
            {errors?.email?.type === "required" && (
              <p className="text-red-600 text-sm mt-[1px]">
                This field is required
              </p>
            )}
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label className="block text-base text-gray-800  ">
                Password
              </label>
            </div>

            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg   focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              {...register("password", {
                required: true,
                pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
              })}
            />

            {errors?.password?.type === "pattern" && (
              <p className="text-red-600 text-sm mt-[1px]">
                Password must contain at least one uppercase and lowercase
                letter and be at least 6 characters long
              </p>
            )}
            {errors?.password?.type === "required" && (
              <p className="  text-red-600 text-sm mt-[1px]">
                This field is required
              </p>
            )}
          </div>
          <div className="mt-4">
            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-base text-gray-800"
              >
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
                {...register("image", { required: true })}
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#ff5a3c] rounded-lg   focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign Up
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <a
            href="#"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or login with Social Media
          </a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6  mx-auto">
          <button
            onClick={handleGoogle}
            type="button"
            className="mx-auto hover:scale-105 duration-300 transition-all"
          >
            <FcGoogle size={30} />
          </button>
        </div>

        <p className="mt-8 text-sm font-light text-center text-gray-400">
          {" "}
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-gray-700   hover:underline"
          >
            Signin
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
