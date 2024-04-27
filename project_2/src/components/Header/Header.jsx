import styles from "./Header.module.css";

const Header = () => {
  return (
   
      <nav className={`${styles.header_container} container `}>
        <div className={styles.logo}>
          <img src="/images/logo_2.jpg" alt="logo" width="80px" height="65px" />
        </div>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>
            <button>LOGIN</button>
          </li>
        </ul>
      </nav>
    
  );
};
export default Header;
