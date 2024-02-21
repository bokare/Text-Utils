import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ mode, toggleChange, colors, theme }) => {
  return (
    <>
      <nav className={`navbar navbar-${mode} navbar-expand-lg bg-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/addform">
                  Home
                </Link>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              <div className="form-check form-switch my-2 mx-2">
                <input
                  className="form-check-input my-1 mx-2 "
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  onClick={toggleChange}
                />
              </div>
              <div className="d-flex ">
                {colors.map((item, index) => (
                  <div // **********************************  if we use button here whatever change we did will disabled immediately so donot use buttons here
                    className="p-2 my-2 mx-2 border border-light rounded-circle "
                    onClick={()=>{
                        theme(item)
                    }}
                    key={item}
                    style={{ backgroundColor: `${item}` }} ////  ************ IMP **************
                  ></div>
                ))}
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
