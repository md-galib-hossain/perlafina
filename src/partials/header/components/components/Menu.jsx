"use client"
import { useRef, useState } from "react";
import Dropdown from "./Dropdown";

const Menu = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  // closeDropdownHandler(dropdownRef, setShowDropdown);
  return (
    <div className="relative ">
      <Dropdown
        dropdownRef={dropdownRef}
        isOpen={showDropdown}
        setIsOpen={setShowDropdown}
        handleCloseMenu={() => {
          setShowDropdown((prevValue) => !prevValue);
        }}
      />
    </div>
  );
};

export default Menu;
