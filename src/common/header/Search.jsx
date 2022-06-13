import React, { useEffect, useState } from "react";
import logo from "../../components/assets/images/Logo.png";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp, IoSearch } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { listCartItems } from "../../redux/actions/cartAction";
import "./header-style.css";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
const Search = () => {
  const dispatch = useDispatch();
  const cartSize = useSelector((state) => state.cartItemList.cartItems.length);
  console.log("-----cart len", cartSize);
  useEffect(() => {
    dispatch(listCartItems());
  }, [dispatch]);
  const history = useNavigate();
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  const goCart = () => {
    history("/cart");
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    console.log("----logout")
    localStorage.removeItem('user')
    history('/')
  }
  const goHome = () => {
    history('/shop')
  }
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width " onClick={goHome}>
            <img src={logo} alt="" />
          </div>

          <div className="search-box f_flex">
            <IoSearch className="search_icon2" />
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <div className="profile"  >
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <IoPersonSharp  className="search_icon" />
              </IconButton>
              
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={logout}>
                  <ListItemIcon >
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
            <div className="cart">
              <div onClick={goCart}>
                <FaShoppingCart className="search_icon" />
                <span>{cartSize === 0 ? "" : cartSize}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
