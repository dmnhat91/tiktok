import classNames from "classnames/bind";
import styles from "./Header.module.scss";

// use classNames.bind to allow '-' in className (for example .post-item)
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>{/* logo */}</div>
    </header>
  );
}

export default Header;
