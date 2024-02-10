
import { Navbar } from 'flowbite-react';

const Nav = () => {

  return (
    <Navbar fluid rounded >
      <Navbar.Brand href="#">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Algo IDE logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Algo IDE</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link  href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;