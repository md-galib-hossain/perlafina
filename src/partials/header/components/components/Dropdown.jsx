import { CgMenuRightAlt } from "react-icons/cg";

const Dropdown = ({ dropdownRef, isOpen, handleCloseMenu }) => {
  return (
    <div className="p-2 my-3 rounded-lg text-xs cursor-pointer">
      <button onClick={handleCloseMenu}>
        <CgMenuRightAlt size={24} />
      </button>
      <div
        ref={dropdownRef}
        // onClick={() => {
        //   setIsOpen(!isOpen);
        // }}
        className={`absolute top-14 right-0 font-light transition-all overflow-hidden py-5 text-base  bg-[#252525] backdrop-blur-xl rounded-lg text-center w-[250px] space-y-4 min-w-[250px] duration-200 ${
          isOpen ? "h-[200px] min-h-fit z-50 opacity-100 " : "h-0 opacity-0"
        }`}
      >
        <a onClick={handleCloseMenu} className="block" href="#home">
          Home
        </a>
        <a onClick={handleCloseMenu} className="block" href="#services">
          Services
        </a>
        <a onClick={handleCloseMenu} className="block" href="#about">
          About{" "}
        </a>

        <a onClick={handleCloseMenu} className="block" href="#contact">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
