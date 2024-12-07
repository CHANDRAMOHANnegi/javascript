import topNavigationMenu from "@/config/nav-config";
import React, { useState } from "react";
import { MenuItem } from "../types";

const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const handleMenuMouseEnter = (id: string) => {
    setActiveMenu(id);
    setActiveSubMenu(null);
  };

  const handleSubMenuMouseEnter = (id: string) => {
    setActiveSubMenu(id);
  };

  const handleMouseLeave = () => {
    // setActiveMenu(null);
    // setActiveSubMenu(null);
  };

  const renderSubMenu = (subMenu: MenuItem[] | undefined, level = 1): JSX.Element | null => {
    if (!subMenu) return null;

    const positioning = level === 1 ? "absolute left-0 top-full" : "absolute left-full top-0";

    return (
      <ul
        className={`${positioning} bg-gray-800 text-white rounded-md shadow-lg z-10`}
        onMouseEnter={(e) => e.stopPropagation()} 
        onMouseLeave={handleMouseLeave}
      >
        {subMenu.map((item) => (
          <li
            key={item.id}
            className="relative group hover:bg-gray-700"
            onMouseEnter={() => handleSubMenuMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={item.path}
              className="px-4 py-2 whitespace-nowrap flex items-center gap-2"
            >
              {item.icon && <i className={item.icon}></i>} {item.label}
            </a>
            {item.subMenu && activeSubMenu === item.id && renderSubMenu(item.subMenu, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          <a href="/">E-Shop</a>
        </div>
        <nav>
          <ul className="flex space-x-6">
            {topNavigationMenu.map((menu) => (
              <li
                key={menu.id}
                className="relative group"
                onMouseEnter={() => handleMenuMouseEnter(menu.id)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={menu.path}
                  className="flex items-center gap-2 text-lg hover:text-yellow-400"
                >
                  {menu.icon && <i className={menu.icon}></i>} {menu.label}
                  {menu.badge && (
                    <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 ml-2">
                      {menu.badge}
                    </span>
                  )}
                </a>
                {menu.subMenu && activeMenu === menu.id && renderSubMenu(menu.subMenu)}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
