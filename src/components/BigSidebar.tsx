import NavLinks from "./NavLinks";
import Logo from "./Logo";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useSelector } from "react-redux";
import React from "react";

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector<
    { user: { isSidebarOpen: boolean } },
    { isSidebarOpen: boolean }
  >(store => store.user);

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? "sidebar-container "
            : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={undefined} />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
