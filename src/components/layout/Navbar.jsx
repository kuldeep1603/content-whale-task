import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "../common/Button";
import Container from "../common/Container";
import Icon from "../common/Icon";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navLinks = ["Home", "About Us", "Services", "Blogs"];

    return (
        <nav className="py-5 px-5">
            <Container className="flex items-center justify-between">

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <li key={link} className="hover:text-secondary tracking-wide text-base font-thin text-white cursor-pointer">
                            {link}
                        </li>
                    ))}
                </ul>

                <Icon title="logo" classname="w-44" />

                <div className="hidden md:flex gap-3">
                    <Button className="bg-secondary">Book a Session</Button>
                    <Button className="bg-tertiary" >Contact Us</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <HiX className="text-white" color="#fff" size={24} /> : <HiMenu color="#fff" size={24} />}
                </button>
            </Container>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-primary border-t border-gray-700">
                    <ul className="flex flex-col items-center py-4 space-y-4">
                        {navLinks.map((link) => (
                            <li className="text-white" key={link}>{link}</li>
                        ))}
                        <Button className="bg-secondary">Book a Session</Button>
                        <Button className="bg-tertiary">Contact Us</Button>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;