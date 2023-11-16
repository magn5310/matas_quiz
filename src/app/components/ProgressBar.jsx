import styles from "./ProgessBar.module.css";

export default function ProgressBar() {
  return (
    <div className="px-2 w-full">
      <div className="flex justify-between">
        <p className="text-xs font-bold text-rose-500">31%</p>
        <p className="text-xs font-bold text-rose-500">209 produkter fundet</p>
      </div>
      <div className="bg-rose-200 w-full h-3 rounded overflow-hidden mt-1">
        <div className={styles.bar}></div>
      </div>
    </div>
  );
}
