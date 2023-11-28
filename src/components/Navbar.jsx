import { Avatar, Button } from "@nextui-org/react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 bg-transparent text-white flex justify-between p-4">
        <div>
          <Button radius="full" variant="shadow" className="bg-transparent text-white shadow-xl h-20 w-60 flex">
            <Avatar color="default" className="w-16 h-16 bg-transparent" src="logo.png" />
            <span className="text-2xl font-bold self-center ml-4">Prajwal</span>
          </Button>
        </div>
        <div className="text-white sm:block hidden text-md my-auto ">
          <NavLink className="p-4" exact to="/" activeClassName="text-blue-500">Home</NavLink>
          <NavLink className="p-4" to="/about" activeClassName="text-blue-500">About Us</NavLink>
          <NavLink className="p-4" to="/contact" activeClassName="text-blue-500">Contact</NavLink>
          <NavLink className="p-4" to="/projects" activeClassName="text-blue-500">Projects</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;