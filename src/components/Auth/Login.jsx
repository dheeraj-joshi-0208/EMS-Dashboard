import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Fixed typo

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="border border-emerald-300 p-10 rounded-2xl bg-zinc-900">
        <form onSubmit={submitHandler} className="flex flex-col gap-4 w-96">
          <input
            onChange={(event) => setEmail(event.target.value)}
            required
            value={email}
            type="email"
            placeholder="Enter your email"
            className="border-2 border-emerald-500 bg-transparent rounded-full py-3 px-4 text-white outline-none placeholder-gray-400 w-full focus:border-emerald-300 focus:ring-1 focus:ring-emerald-300"
          />
          <input
            onChange={(event) => setPassword(event.target.value)} // Fixed typo
            required
            value={password} // Fixed typo
            type="password"
            placeholder="Enter your password"
            className="border-2 border-emerald-500 bg-transparent rounded-full py-3 px-4 text-white outline-none placeholder-gray-400 w-full focus:border-emerald-300 focus:ring-1 focus:ring-emerald-300"
          />

          <button className="bg-emerald-400 text-white py-3 px-4 rounded-full hover:bg-emerald-500 cursor-pointer">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
