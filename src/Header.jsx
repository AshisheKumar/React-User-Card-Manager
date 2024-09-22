import React from "react";

function Header() {
  return (
    <header className="w-full py-4 flex justify-center bg-zinc-200">
      <div className="bg-gradient-to-r from-yellow-500 to-blue-600 inline-block px-6 py-2 rounded-md">
        <h1 className="text-4xl font-bold text-white tracking-wider">
          React-Based User Card Manager
        </h1>
      </div>
    </header>
  );
}

export default Header;
