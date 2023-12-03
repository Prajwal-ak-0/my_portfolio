import { Button, Avatar } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarContent,
  Link,
} from "@nextui-org/react";
import React from "react";
import Logo from "./Logo";
import { Home, SpellCheck, Mail, Folder, File, Linkedin, Github } from "lucide-react";
import github from "../assets/tech/github2.png";
import linkdin from "../assets/tech/linkdin.png"; // Correct the image import

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);
  const menuItems = ["Home", "About", "Contact", "Projects"];
  const icon = [Home, SpellCheck, Mail, Folder, File];
  const href = ["/", "/about", "/contact", "/projects"];
  const linkedinURL = "https://www.linkedin.com/in/prajwal-ak-802552191";
  const githubURL = "https://github.com/Prajwal-ak-0";

  return (
    <>
      <div className="hidden top-0 left-0 right-0 z-10 bg-transparent text-white sm:flex justify-between md:px-8 px-4 py-4">
        <Logo />
        <div className="sm:flex gap-4 my-auto"> {/* Updated this line */}
          {menuItems.map((item) => (
            <NavLink
              key={item}
              to={`#${item.toLowerCase()}`}
              className="py-4 md:px-1"
              exact
              activeClassName="text-blue-500"
            >
              <Button className="bg-transparent text-white md:text-xl sm:text-lg hover:text-blue-700 hover:shadow-lg">
                {item}
              </Button>
            </NavLink>
          ))}
          <div className="flex items-center justify-center gap-4">
            <NavLink to={githubURL} target="_blank" rel="noopener noreferrer">
              <Avatar
                className="cursor-pointer"
                onClick={() => { }}
                isBordered
                color="black"
                src={github}
              />
            </NavLink>
            <NavLink to={linkedinURL} target="_blank" rel="noopener noreferrer">
              <Avatar
                className="cursor-pointer"
                onClick={() => { }}
                isBordered
                color="black"
                src={linkdin}
              />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="fixed sm:hidden top-0 left-0 right-0 z-10 bg-transparent text-white justify-between px-8 py-4">
        <Navbar className="bg-transparent" onMenuOpenChange={setIsMenuOpen}>
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
          </NavbarContent>
          <NavbarMenu className="bg-transparent mx-8 pt-6">
            {menuItems.map((item, index) => (
              <NavbarMenuItem className="py-1 " key={`${item}-${index}`}>
                <div className="flex hover:shadow-xl">
                  {icon[index] &&
                    React.createElement(icon[index], {
                      size: 28,
                      color: "white",
                    })}
                  <Link className="w-full text-lg ml-2 text-white" href={href[index]}>
                    {item}
                  </Link>
                </div>
              </NavbarMenuItem>
            ))}
            <div className="flex flex-col gap-4"> {/* Added this div for avatars in mobile view */}
              <div className="flex hover:shadow-xl" >
                <Github size={28} color="white" />
                <Link className="w-full text-lg ml-2 text-white" href={githubURL}>
                  Github
                </Link>
              </div>
              <div className="flex hover:shadow-xl" >
                <Linkedin size={28} color="white" />
                <Link className="w-full text-lg ml-2 text-white" href={linkedinURL}>
                  Linkedin
                </Link>
              </div>
            </div>
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  );
};

export default Nav;
