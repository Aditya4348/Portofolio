import { Link } from "react-router-dom";

interface MenuProps {
  children?: React.ReactNode;
  className?: string;
}

interface MenuItemProps {
  children?: React.ReactNode;
  logo?: React.ReactNode;
  to?: string;
  className?: string;
}

export function MenuContent({ children, className = "" }: MenuProps) {
  return (
    <ul
      className={`menu-horizontal rounded-box p-2 space-y-1 ${className}`}
    >
      {children}
    </ul>
  );
}

export function MenuListItem({ logo, children, to = "#", className = "" }: MenuItemProps) {
  return (
    <li>
      <Link
        to={to}
        className={`flex items-center gap-2 px-2 py-1 rounded text-sm font-medium transition-colors duration-200 ${className}`}
      >
        {logo && <span className="text-base">{logo}</span>}
        <span>{children}</span>
      </Link>
    </li>
  );
}
