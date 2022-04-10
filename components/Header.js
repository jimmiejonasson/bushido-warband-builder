import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        Bushido Warband <span>Builder</span>
      </h1>
      <p className={styles.description}>Build your different Warbands here</p>
    </div>
  );
};

export default Header;
