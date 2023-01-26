import React from "react";

const NavbarComponent = () => {
  return (
    <div className="bg-slate-800 w-full h-[12vh] flex items-center justify-center">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-full h-[6vh] max-w-xs search"
      />
    </div>
  );
};

export default NavbarComponent;
