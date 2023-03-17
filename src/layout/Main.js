import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Main(props, ref) {
  const [show, setShow] = useState(false);
  return (
    <div className="overflow-x-hidden">
      <Sidebar show={show} />
      <div
        className={`right-0 absolute w-[100%] ${
          show && "lg:w-[calc(100%_-_theme(spacing.60))]"
        } transition-all duration-500 ease-in-out`}
      >
        <Header showSidebar={show} toggleSidebar={() => setShow(!show)} />
        <main
          className={`p-3 bg-gray-300 mx-auto min-h-[calc(100vh_-_theme(spacing.12))]`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Main;
