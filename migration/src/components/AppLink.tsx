/**
 * Framework-agnostic link wrapper.
 * Today: re-exports react-router-dom Link.
 * Next.js migration: swap to next/link.
 */
import { Link, type LinkProps } from "react-router-dom";
import { forwardRef } from "react";

export type AppLinkProps = LinkProps & React.RefAttributes<HTMLAnchorElement>;

const AppLink = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link ref={ref} {...props} />
));
AppLink.displayName = "AppLink";

export { AppLink };
