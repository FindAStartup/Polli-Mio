// import AdminProductForm from "@/components/AdminProductForm";

// export default function Page() {
//   return (
//     <div className="p-10">



//       <AdminProductForm />
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import AdminProductForm from "@/components/AdminProductForm";

export default function Page() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      loginForm.email === "Pollomio107@gmail.com" &&
      loginForm.password === "Pollomiokattanam@007"
    ) {
      setLoggedIn(true);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="">
      {/* If not logged in → show login page */}
      {!loggedIn && (
        <div className="max-w-md mx-auto bg-white shadow p-6 rounded space-y-4">
          <h2 className="text-xl font-bold">Admin Login</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 rounded"
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-2 rounded"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
              required
            />

            <button className="w-full bg-blue-600 text-white p-2 rounded">
              Login
            </button>
          </form>
        </div>
      )}

      {/* After login → show Product Form */}
      {loggedIn && <AdminProductForm />}
    </div>
  );
}
