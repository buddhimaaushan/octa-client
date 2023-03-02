import { useState } from "react";
import Badge from "@mui/material/Badge";
import {
  ChatIcon,
  DarkIcon,
  HelpIcon,
  LightIcon,
  NortificationIcon,
  SearchIcon,
  SettingIcon,
} from "./NavIcons";

type Props = {
  onClick: Function;
  theme?: boolean;
  badge?: number;
};

const commonClass =
  "mx-2 h-full p-2 flex justify-center items-center dark:bg-transparent bg-blue-100 hover:bg-blue-200 border dark:border-gray-700 border-transparent rounded-full cursor-pointer";
const commonClassSub =
  "mx-1 p-1 h-full flex justify-center items-center cursor-pointer";

const transitions =
  "transition-all duration-100 ease-in-out select-none active:scale-100 hover:scale-110";

export function Search({ onClick }: Props): JSX.Element {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={(e) => onClick(e)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${commonClass} ${transitions} dark:rounded-xl`}
    >
      <SearchIcon hover={hover} />
    </div>
  );
}

export function Nortification({ onClick, badge = 0 }: Props): JSX.Element {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={(e) => onClick(e)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${commonClass} ${transitions}  dark:rounded-xl`}
    >
      <Badge
        color="error"
        overlap="rectangular"
        badgeContent={badge}
        max={99}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiBadge-badge": { fontSize: 12 },
        }}
      >
        <NortificationIcon hover={hover} />
      </Badge>
    </div>
  );
}

export function Chat({ onClick, badge = 0 }: Props): JSX.Element {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={(e) => onClick(e)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${commonClass} ${transitions}  dark:rounded-xl`}
    >
      <Badge
        color="error"
        overlap="rectangular"
        badgeContent={badge}
        max={99}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <ChatIcon hover={hover} />
      </Badge>
    </div>
  );
}

export function Profile({ onClick }: Props): JSX.Element {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={(e) => onClick(e)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${commonClass} ${transitions}  `}
    >
      <Badge
        color="error"
        overlap="circular"
        badgeContent={1000}
        max={99}
        variant="dot"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div className="bg-blue-400 text-primary w-10 h-10 flex justify-center items-center rounded-full ">
          A
        </div>
      </Badge>
    </div>
  );
}

export function Theme({ onClick, theme }: Props): JSX.Element {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={(e) => onClick(e)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${commonClassSub}  ${transitions} `}
    >
      {theme ? <LightIcon hover={hover} /> : <DarkIcon hover={hover} />}
    </div>
  );
}

export function Setting({ onClick }: Props): JSX.Element {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={(e) => onClick(e)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${commonClassSub}  ${transitions} `}
    >
      <SettingIcon hover={hover} />
    </div>
  );
}

export function Help({ onClick }: Props): JSX.Element {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={(e) => onClick(e)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${commonClassSub}  ${transitions} `}
    >
      <HelpIcon hover={hover} />
    </div>
  );
}
