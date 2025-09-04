// Dropdown.tsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

interface DropdownProps {
  label: string;
  links: { label: string; href: string }[];
}

const PandaWorldDropdown: React.FC<DropdownProps> = ({ label, links }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* Button */}
      <a
        onClick={() => setOpen(!open)}
      >
        {label}
      </a>

      {/* Menu */}
      {open && (
        <div className="absolute mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)} // close when link clicked
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PandaWorldDropdown;
