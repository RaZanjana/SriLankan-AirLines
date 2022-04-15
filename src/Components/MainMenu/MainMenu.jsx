import React from "react";
import MainLogo from "../../assets/icons/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import LoginIcon from "@mui/icons-material/Login";
import ReactCountryFlag from "react-country-flag";
import MenuIcon from '@mui/icons-material/Menu';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "0ch",
      "&:focus": {
        width: "15ch",
      },
    },
  },
}));

function MainMenu() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm main-menu">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={MainLogo} alt="" width="280" className="navbrand-img" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            < MenuIcon color="primary" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex justify-content-center">
                <a className="nav-link" aria-current="page" href="#">
                  Plan & Book
                </a>
              </li>
              <li className="nav-item d-flex justify-content-center">
                <a className="nav-link" href="#">
                  Travel information
                </a>
              </li>
              <li className="nav-item d-flex justify-content-center">
                <a className="nav-link" aria-current="page" href="#">
                  Experience
                </a>
              </li>
              <li className="nav-item d-flex justify-content-center">
                <a className="nav-link" href="#">
                  Flysmiles
                </a>
              </li>
            </ul>
            <form className="d-flex align-items-center justify-content-center">
              {/* <SearchIcon color="primary" /> */}
              <Search>
                <SearchIconWrapper>
                  <SearchIcon color="primary" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <a className="nav-link" href="#">
                <LoginIcon color="primary" />
              </a>
              <a className="nav-link d-flex align-items-center" href="#">
                <ReactCountryFlag
                  countryCode="lk"
                  svg
                  cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                  cdnSuffix="svg"
                  title="Sri Lanka"
                />
                <small>EN</small>
              </a>
            </form>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
export default MainMenu;
