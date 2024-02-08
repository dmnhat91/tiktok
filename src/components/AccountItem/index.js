import classNames from "classnames/bind";
import Image from "@/components/Image";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <Image className={cx("avatar")} src="/avatar.jpeg" alt="" />
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
