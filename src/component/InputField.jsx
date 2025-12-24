import React from "react";

export default function InputField({ label, type = "text" }) {
  return (
    <div>
      <label className="text-sm font-medium text-black">{label}</label>
      <input
        type={type}
        className="w-full mt-1 border rounded-md px-3 py-2 outline-none
        focus:ring-2 focus:ring-green-600"
      />
    </div>
  );
}
