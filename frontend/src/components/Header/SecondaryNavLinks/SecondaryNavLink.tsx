import React from "react";
import { NavLink } from "react-router-dom";

interface SecondaryNavLinkProps {
  route: string;
  render?: any;
  disableLink?: boolean;
}

const SecondaryNavLink = ({
  route,
  render,
  disableLink,
}: SecondaryNavLinkProps) => {
  return (
    <li>
      {disableLink ? (
        <span>{render()}</span>
      ) : (
        <NavLink to={route}>
          <span>{render()}</span>
        </NavLink>
      )}
    </li>
  );
};

export default SecondaryNavLink;
