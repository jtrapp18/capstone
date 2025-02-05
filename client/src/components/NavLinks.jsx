import { useState } from "react";
import { StyledMenuItem, StyledNavLink } from "../MiscStyling";
import { FaUserAlt } from 'react-icons/fa'; // Import icons
import AccountDropdown from "./AccountDropdown";
import styled from "styled-components";

const StyledAccountIcon = styled.div`
  ${StyledMenuItem}
  position: relative;
  z-index: 1000;
`

function NavLinks({ handleClick, setIsMenuOpen }) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <StyledNavLink
        to="/about"
        className="nav-link"
        onClick={handleClick}
      >
        About
      </StyledNavLink>
      <StyledNavLink
        to="/news"
        className="nav-link"
        onClick={handleClick}
      >
        News
      </StyledNavLink>
      <StyledNavLink
        to="/events"
        className="nav-link"
        onClick={handleClick}
      >
        Events
      </StyledNavLink>
      <StyledNavLink
        to="/hive_map"
        className="nav-link"
        onClick={handleClick}
      >
        Map
      </StyledNavLink>
      <StyledNavLink
        to="/analysis"
        className="nav-link"
        onClick={handleClick}
      >
        Analysis
      </StyledNavLink>
      <StyledAccountIcon
        className="nav-link"
        onMouseOver={()=>setIsMenuOpen(true)}
        onMouseOut={()=>setIsMenuOpen(false)}
      >
        <FaUserAlt />
        {/* <AccountDropdown 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        /> */}
      </StyledAccountIcon> 
  </>
  );
};

export default NavLinks;