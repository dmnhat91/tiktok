import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react";

import "tippy.js/dist/tippy.css";

import Button from "@/components/Button";
import styles from "./Header.module.scss";
import images from "@/assets/images";
import Menu from "@/components/Popper/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "@/components/Icons";
import Image from "@/components/Image";
import Search from "../Search";

// use classNames.bind to allow '-' in className (for example .post-item)
const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tieng Viet",
        },
      ],
    },
  },
  { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: "Feedback and help", to: "/feedback" },
  { icon: <FontAwesomeIcon icon={faKeyboard} />, title: "Keyboard shortcuts" },
];

function Header() {
  const currentUser = true;

  // Handle logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  const userMenu = [
    { icon: <FontAwesomeIcon icon={faUser} />, title: "View profile", to: "/@hoaa" },
    { icon: <FontAwesomeIcon icon={faCoins} />, title: "Get coins", to: "/coin" },
    { icon: <FontAwesomeIcon icon={faGear} />, title: "Settings", to: "/settings" },
    ...MENU_ITEMS,
    { icon: <FontAwesomeIcon icon={faSignOut} />, title: "Log out", to: "/logout", separate: true },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        <Search />

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <InboxIcon />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log In</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image src="/avatar.jpeg" className={cx("user-avatar")} alt="Nguyen Van A" />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
