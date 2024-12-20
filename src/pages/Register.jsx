import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Register() {
  const [formRegister, setFormRegister] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormRegister((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password, confirmPassword } = formRegister;

    if (password !== confirmPassword) {
      setErrorMessage("Password tidak cocok");
      return;
    }

    setErrorMessage("");
    setLoading(true);

    // Simulasi proses registrasi
    setTimeout(() => {
      // Simulasi sukses
      alert(`Registrasi berhasil! Selamat datang, ${username}`);
      setFormRegister({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setLoading(false);
      navigate("/");
    }, 2000); // Delay 2 detik untuk simulasi proses
  };

  return (
    <div className="min-h-screen bg-[#FFF6E4] font-poppins flex justify-center items-center mt-10">
      <Navbar />
      <div className="w-full max-w-lg bg-white shadow-lg rounded-3xl p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formRegister.username}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#A1A890]"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formRegister.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#A1A890]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formRegister.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#A1A890]"
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formRegister.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#A1A890]"
              placeholder="Confirm your password"
              required
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#F79E1B] text-white py-3 rounded-full hover:bg-orange-600 transition duration-300"
            disabled={loading}
          >
            {loading ? "Processing..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Sudah memiliki akun?{" "}
          <a href="/login" className="text-black font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
