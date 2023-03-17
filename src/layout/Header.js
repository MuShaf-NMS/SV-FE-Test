import React from "react";
import BurgerButton from "../component/BurgerButton";

function Header(props) {
  return (
    <div className="bg-[#0200cd] w-full flex justify-between">
      <div className="flex items-center">
        <BurgerButton open={props.showSidebar} onClick={props.toggleSidebar} />
        <div className="font-semibold text-white">Article</div>
      </div>
    </div>
  );
}

export default Header;
