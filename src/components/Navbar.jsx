import { NavLink, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faXmark,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

const links = [
  { href: "/podcasting", label: "Podcasting" },
  { href: "/ads-marketplace", label: "Ads Marketplace" },
  { href: "/features", label: "Features" },
]
const Navbar = ({}) => {
  const [show, setShow] = useState(false)
  const location = useLocation()
  useEffect(()=>{
    setShow(false)
  },[location])
  return (
    <>
      <nav className="font-futuraMd navbar text-black px-10 xl:px-20 py-6 absolute top-0 left-0 z-10 h-36">
        <NavLink to="/" className="mr-8">
          <img src="/images/podfi.png" width={100} />
        </NavLink>
        <div className="flex justify-end gap-x-4 xl:justify-between w-full">
          {/* pages */}
          <ul className="gap-x-8 px-1 text-xl hidden xl:flex">
            {links.map((link) => {
              return (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      isActive
                        ? "text-sky-900 bg-cyan-100 px-1 pb-0.5 rounded"
                        : "hover:text-cyan-500"
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            })}
          </ul>
          {/* search bar */}
          <form className="hidden md:flex relative text-sky-900" action="">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-4 h-4 absolute top-4 left-3"
            />
            <input
              id="search"
              name='search'
              type="text"
              placeholder="Search"
              className="input w-24 md:w-auto pl-9 placeholder-current border-current border-2 rounded-xl bg-transparent focus:border-cyan-500 focus:outline-cyan-500"
            />
          </form>
          {/* signup/in btns and wallet */}
          <div className="hidden xs:flex items-center gap-x-4">
            <NavLink
              to="/signup"
              className="underline text-white hover:text-cyan-500"
            >
              Sign up
            </NavLink>
            <NavLink
              to="/signin"
              className="text-white bg-cyan-500 hover:bg-cyan-600 py-2 px-4 rounded-xl"
            >
              Sign in
            </NavLink>
            <NavLink
              to="/signup"
              className="bg-cyan-800 hover:bg-cyan-900 p-3 rounded-xl"
            >
              <img src="/images/wallet.svg" width={18} />
            </NavLink>
          </div>
          {/* toggler icon */}
          <div className="inline xl:hidden text-white">
            <div
              tabIndex={0}
              role="button"
              onClick={() => setShow((prev) => !prev)}
            >
              {show ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  className="w-8 h-8 nav-icon-toggler"
                  aria-expanded={show}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  className="w-8 h-8 nav-icon-toggler"
                  aria-expanded={show}
                />
              )}
            </div>
          </div>
        </div>
        {/* dropdown */}
        <ul
          tabIndex={0}
          className={
            show
              ? "flex flex-col items-center gap-y-4 the-content py-8 text-center text-black bg-white  w-screen absolute left-0 top-36 h-fit xl:hidden"
              : "flex flex-col items-center gap-y-4 the-content py-0 text-center text-black bg-white  w-screen absolute left-0 top-36 h-0 collapse rounded-none"
          }
        >
          {/* search bar */}
          <div className="flex md:hidden relative text-sky-900">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-4 h-4 absolute top-4 left-3"
            />
            <input
              type="text"
              placeholder="Search"
              className="input w-auto pl-9 placeholder-current border-current border-2 rounded-xl bg-transparent focus:border-cyan-500 focus:outline-cyan-500"
            />
          </div>
          {/* signup/in btns and wallet */}
          <div className="flex xs:hidden items-center gap-x-4">
            <NavLink
              to="/signup"
              className="underline text-black  hover:text-cyan-500"
            >
              Sign up
            </NavLink>
            <NavLink
              to="/signin"
              className="text-white bg-cyan-500 hover:bg-cyan-600 py-2 px-4 rounded-xl"
            >
              Sign in
            </NavLink>
            <NavLink
              to="/signup"
              className="bg-cyan-800 hover:bg-cyan-900 p-3 rounded-xl"
            >
              <img src="/images/wallet.svg" width={18} />
            </NavLink>
          </div>
          {links.map((link) => {
            return (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    isActive
                      ? "text-sky-900 bg-cyan-100 px-1 pb-0.5 rounded"
                      : "hover:text-cyan-500"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
export default Navbar
