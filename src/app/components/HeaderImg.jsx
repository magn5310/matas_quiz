import styles from "./HeaderImg.module.css";

import FoldDownBtn from "./FoldDownBtn";

export default function HeaderImg({ toggleQuiz }) {
  return (
    <header
      className={styles.headerImg}
      style={{
        backgroundImage: `url(/pics/model.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "40%",
      }}>
      <FoldDownBtn toggleQuiz={toggleQuiz} />
      <h2 className="text-3xl text-center font-dm text-white row-start-2 col-start-2 z-30 mb-5">
        Find de bedste <br /> hårprodukter til dit hår
      </h2>
      <div className="w-full h-full col-span-full row-start-1 row-end-4 bg-rose-400 z-0 opacity-40"></div>
    </header>
  );
}
