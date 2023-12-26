import React from "react";

function Header() {
  return (
    <div className="flex flex-1 h-32">
      <img className="h-2/3 ml-7 my-auto" src={require("../resources/logo.jpg")} />
    </div>
  );
}

export default Header;
