import styles from "./Account.module.css";
import ad_icon from "../../assets/ad_icon.png";
import user_icon from "../../assets/user_icon.png";
import order_icon from "../../assets/order_icon.png";
import recently_viewed_icon from "../../assets/recently_viewed_icon.png";
import payment_icon from "../../assets/payment_icon.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import person from "../../assets/person.png";

const Account = () => {
  return (
    <div className={styles.account}>
      <h2 className={styles.header}>Account Overview</h2>
      <div className={styles.content}>
        <div className={styles["account-left"]}>
          <ul>
            <li>
              <img src={user_icon} alt="user icon" />
              <small>Profile</small>
            </li>
            <li>
              <img src={order_icon} alt="order icon" />
              <small>Orders</small>
            </li>
            <li>
              <img src={recently_viewed_icon} alt="recently viewed icon" />
              <small>Payment Cards</small>
            </li>
            <li>
              <img src={payment_icon} alt="payment icon" />
              <small>Product Status</small>
            </li>
            <li>
              <img src={recently_viewed_icon} alt="recently viewed icon" />
              <small>My Adverts</small>
            </li>
            <li>
              <img src={ad_icon} alt="ad icon" />
              <small>My Adverts</small>
            </li>
          </ul>
        </div>

        <div className={styles["account-middle"]}>
          <input type="image" src={person} alt="woman" />

          <div className={styles.password}>
            <label htmlFor="password">Password</label>
            <input type="password" />
          </div>
        </div>

        <div className={styles["account-right"]}>
          <div className={styles["account-right-top"]}>
            <h2>Account Details</h2>

            <h3>Esther Iremitide Olowoniyi</h3>

            <div className={styles.group}>
              <h4>Esther Iremitide Olowoniyi</h4>
              <h4>Parakin, Ile Ife</h4>
              <h4>Ile ife, Osun</h4>
              <h4>+234 7065056725</h4>
            </div>
            <h4>Estherolowoniyi@gmail.com</h4>
          </div>

          <h3>EDIT PROFILE</h3>
        </div>
      </div>
      <div className={styles.submit}>
        <CustomButton
          buttonStyle={styles["big-btn"]}
          type="orange"
          text="LOG OUT"
          to="/"
        />
      </div>
    </div>
  );
};

export default Account;
