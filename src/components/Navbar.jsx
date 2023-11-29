import { Button } from "@nextui-org/react";
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarMenu, NavbarMenuToggle, NavbarMenuItem, NavbarContent, Link } from "@nextui-org/react";
import React from "react";
import Logo from "./Logo";
import { Home, SpellCheck, Mail, Folder, File } from "lucide-react"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);
  const menuItems = [
    "Home",
    "About",
    "Contact",
    "Projects",
    "Resume"
  ];
  const icon = [
    Home,
    SpellCheck,
    Mail,
    Folder,
    File
  ]
  const href = [
    "/",
    "/about",
    "/contact",
    "/projects",
    "/resume"
  ]

  return (
    <>
      <div className="fixed hidden top-0 left-0 right-0 z-10 bg-transparent text-white sm:flex justify-between md:px-8 px-4 py-4">
        <Logo />
        <div className=" sm:block hidden  my-auto ">
          {
            menuItems.map((item) => (
              <NavLink key={item}  to={`#${item.toLowerCase()}`} className="py-4 md:px-1" exact activeClassName="text-blue-500">
                <Button className="bg-transparent text-white md:text-xl sm:text-lg hover:text-blue-700 hover:shadow-lg" >
                  {item}
                </Button>
              </NavLink>
            ))
          }
        </div>
      </div>
      <div className="fixed sm:hidden top-0 left-0 right-0 z-10 bg-transparent text-white justify-between px-8 py-4">
        <Navbar className="bg-transparent " onMenuOpenChange={setIsMenuOpen}>
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
          </NavbarContent>
          <NavbarMenu className="bg-transparent mx-8 pt-6">
            {menuItems.map((item, index) => (
              <NavbarMenuItem className="py-1" key={`${item}-${index}`}>
                <div className="flex hover:shadow-xl">
                  {icon[index] && React.createElement(icon[index], { size: 28, color: 'white' })}
                  <Link
                    className="w-full text-lg ml-2 text-white"
                    href={href[index]}
                  >
                    {item}
                  </Link>
                </div>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  );
};

export default Nav;