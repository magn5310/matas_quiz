import Checkbox from "./Checkbox";
import styles from "./CheckboxContainer.module.css";

export default function CheckboxContainer({ children }) {
  return <section className={`${styles.scrollbar} grid gap-2 w-full mt-2 sm:grid-cols-2 max-w-xl sm:gap-x-4 md:gap-2 md:gap-x-8 overflow-y-scroll max-h-[40vh] overflow-hidden scroll-smooth`}>{children}</section>;
}
