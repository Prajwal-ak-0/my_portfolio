import { Avatar, Button } from "@nextui-org/react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 bg-transparent text-white flex justify-between px-8 py-4">
        <div>
          <Button radius="full" variant="shadow" className="bg-transparent text-white shadow-xl h-24 flex">
            <Avatar color="default" className="w-16 h-16 bg-transparent" src="logo.png" />
          </Button>
        </div>
        <div className=" sm:block hidden  my-auto ">
          <NavLink className="py-4 px-1" exact to="/" activeClassName="text-blue-500">
            <Button className="bg-transparent text-white text-xl hover:text-blue-700 hover:shadow-lg" >
              Home
            </Button>
          </NavLink>
          <NavLink className="py-4 px-1" exact to="/about" activeClassName="text-blue-500">
            <Button className="bg-transparent text-white text-xl hover:text-blue-700 hover:shadow-lg" >
              About
            </Button>
          </NavLink>
          <NavLink className="py-4 px-1" exact to="/projects" activeClassName="text-blue-500">
            <Button className="bg-transparent text-white text-xl hover:text-blue-700 hover:shadow-lg" >
              Projects
            </Button>
          </NavLink>
          <NavLink className="py-4 px-1" exact to="/contact" activeClassName="text-blue-500">
            <Button className="bg-transparent text-white text-xl hover:text-blue-700 hover:shadow-lg" >
              Contact
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;