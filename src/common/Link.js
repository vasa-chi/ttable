import React from "react";
import { default as ToolboxLink } from "react-toolbox/lib/link/Link";
import RouterLink from "./RouterLink";

function Link({ to, replace, ...props }) {
  return (
    <RouterLink to={to} replace={replace}>
      {({ href, onClick }) => (
        <ToolboxLink href={href} onClick={onClick} {...props} />
      )}
    </RouterLink>
  );
}

export default Link;
