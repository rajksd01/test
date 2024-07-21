import React from "react";

function Signin() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="justify-center items-center">
        <h2>Sign In</h2>
        <div className="flex-col">
          <div className="pt-2">
            <LabelledInput label="Username" placeholder="harkirat@gmail.com" />
            <LabelledInput
              label="Password"
              type={"password"}
              placeholder="123456"
            />
            <button
              type="button"
              className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
             Admin Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Signin;
