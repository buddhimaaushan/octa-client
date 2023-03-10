import { useState } from "react";
import Badge from "@mui/material/Badge";

type Props = {
  name?: string;
  className?: string;
  classNameIcon?: string;
  classNameText?: string;
  icon?: React.ReactNode;
  hoverIcon?: React.ReactNode;
  size?: "small" | "medium" | "large" | "custom";
  mode?: "normal" | "fill" | "outline" | "custom";
  badged?: boolean;
  badgeCount?: number;
  onClick?: Function;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  name,
  icon,
  hoverIcon,
  badged,
  badgeCount,
  className,
  classNameIcon,
  classNameText,
  size = "small",
  mode = "normal",
  onClick,
  type = "button",
}: Props) => {
  const [hover, setHover] = useState(false);
  const renderIcon = !hover ? icon : hoverIcon ? hoverIcon : icon;
  const btnIcon = renderIcon && (
    <div
      className={`${
        size === "small"
          ? "mr-1 text-lg"
          : size === "medium"
          ? "mr-2 text-2xl"
          : size === "large"
          ? "mr-8 text-4xl"
          : ""
      } ${classNameIcon}`}
    >
      {renderIcon}
    </div>
  );
  return (
    <button
      type={type}
      onClick={onClick && ((e) => onClick(e))}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`flex items-center  cursor-pointer trans-btn   hover:scale-105 active:scale-95 ${
        size === "small"
          ? "p-2 rounded-lg"
          : size === "medium"
          ? "h-12 px-5 rounded-xl"
          : size === "large"
          ? "h-20 px-10 font-semibold rounded-2xl"
          : ""
      } ${
        mode === "fill"
          ? "bg-blue-500 dark:text-primary text-blue-200 "
          : mode === "outline"
          ? "dark:bg-primary bg-blue-200  text-blue-500 dark:border border-blue-500  dark:hover:text-blue-500"
          : mode === "normal"
          ? "bg-transparent  "
          : ""
      } ${className}`}
    >
      {icon && badged ? (
        <Badge
          color="error"
          overlap="rectangular"
          badgeContent={badgeCount}
          max={99}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{
            "& .MuiBadge-badge": { fontSize: "1rem" },
          }}
        >
          {btnIcon}
        </Badge>
      ) : (
        btnIcon
      )}
      {name && (
        <div
          className={`${
            size === "small"
              ? "text-sm"
              : size === "medium"
              ? "text-md"
              : size === "large"
              ? "text-2xl"
              : ""
          } ${classNameText}`}
        >
          {name}
        </div>
      )}
    </button>
  );
};

export default Button;
