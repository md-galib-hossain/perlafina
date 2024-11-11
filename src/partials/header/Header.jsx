import Container from "../elements/container/Container";
import Logo from "../elements/logo/Logo";
import Navbar from "./components/Navbar";


const Header = () => {
  return (
    <div className="fixed top-0 z-50 w-full backdrop-blur-2xl">
      <Container>
        <div className="flex items-center justify-between h-[70px] lg:h-[90px] py-2 text-base lg:text-lg gap-12">
          <Logo/>
          <Navbar />
        </div>
      </Container>
    </div>
  );
};

export default Header;
