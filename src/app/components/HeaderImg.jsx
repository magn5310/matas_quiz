import styles from "./HeaderImg.module.css";

import FoldDownBtn from "./FoldDownBtn";

export default function HeaderImg() {
  return (
    <header
      className={styles.headerImg}
      style={{
        backgroundImage: `url(/pics/model.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <FoldDownBtn />
      <h2 className="text-3xl text-center text-white">
        Find de bedste <br /> hårprodukter til dit hår
      </h2>
    </header>
  );
}
