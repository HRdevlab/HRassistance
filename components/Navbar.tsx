import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { useTheme } from './ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0 flex items-center group">
            <img
              src={theme === 'light' ? '/assets/Logo-Light.jpeg' : '/assets/Logo-Dark.png'}
              alt="HRassistance"
              className="h-12 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className="flex items-center space-x-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none py-8"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {/* Level 1 Dropdown */}
                    <div className="absolute left-0 top-full w-64 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50">
                      <div className="py-1">
                        {item.children.map((child) => (
                          <div key={child.label} className="relative group/sub">
                            {child.isExternal ? (
                              <a
                                href={child.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                              >
                                {child.label}
                              </a>
                            ) : (
                              <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                                <NavLink to={child.path} className="flex-grow">{child.label}</NavLink>
                                {child.children && <ChevronDown className="h-4 w-4 -rotate-90" />}

                                {child.children && (
                                  /* Level 2 Dropdown (Nested) */
                                  <div className="absolute left-full top-0 w-64 ml-0 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 transform origin-top-left z-50">
                                    <div className="py-1">
                                      {child.children.map((subChild) => (
                                        <NavLink
                                          key={subChild.label}
                                          to={subChild.path}
                                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                                        >
                                          {subChild.label}
                                        </NavLink>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors duration-200 ${isActive
                        ? 'text-corporate-blue dark:text-blue-400 font-semibold'
                        : 'text-gray-600 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-corporate-blue focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-800 mb-2">
                      {item.label}
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.children.map(child => (
                        <div key={child.label}>
                          {child.isExternal ? (
                            <a
                              href={child.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsOpen(false)}
                              className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-corporate-blue dark:hover:text-blue-400"
                            >
                              {child.label}
                            </a>
                          ) : (
                            <>
                              <NavLink
                                to={child.path}
                                onClick={() => !child.children && setIsOpen(false)}
                                className={({ isActive }) =>
                                  `block px-3 py-2 rounded-md text-sm font-medium ${isActive
                                    ? 'bg-blue-50 dark:bg-blue-900/30 text-corporate-blue dark:text-blue-400'
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-corporate-blue dark:hover:text-blue-400'
                                  }`
                                }
                              >
                                {child.label}
                              </NavLink>
                              {child.children && (
                                <div className="pl-4 mt-1 space-y-1 border-l border-gray-100 dark:border-gray-800 ml-2">
                                  {child.children.map(subChild => (
                                    <NavLink
                                      key={subChild.label}
                                      to={subChild.path}
                                      onClick={() => setIsOpen(false)}
                                      className="block px-3 py-1.5 rounded-md text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-corporate-blue dark:hover:text-blue-400"
                                    >
                                      {subChild.label}
                                    </NavLink>
                                  ))}
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium ${isActive
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-corporate-blue dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-corporate-blue dark:hover:text-blue-400'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
