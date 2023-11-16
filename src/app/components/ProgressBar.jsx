import styles from "./ProgessBar.module.css";

export default function ProgressBar() {
  return (
    <div className="px-2">
      <div className="flex justify-between">
        <p className="text-xs font-bold text-red-400">31%</p>
        <p className="text-xs font-bold text-red-400">209 produkter fundet</p>
      </div>
      <div className="bg-red-300 w-full h-3 rounded overflow-hidden mt-1">
        <div className={styles.bar}></div>
      </div>
    </div>
  );
}
