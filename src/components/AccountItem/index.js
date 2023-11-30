import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/aafcc99d2724bc9a38c33fb3bd8bf5c0.jpeg?x-expires=1701352800&x-signature=%2BHnme4Mc4RcyPEz6EtCRy%2BH%2F%2BMY%3D"
        alt=""
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Hong Tham</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>tengibaygio16</span>
      </div>
    </div>
  );
}

export default AccountItem;