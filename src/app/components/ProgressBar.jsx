import styles from "./ProgessBar.module.css";
import Image from "next/image";

export default function ProgressBar() {
  return (
    <div className="px-2 w-full">
      <div className="flex justify-between">
        <p className="text-xs font-bold text-rose-500">31%</p>
        <p className="text-xs font-bold text-rose-500">209 produkter fundet</p>
      </div>
      <div className="bg-red-300 w-full h-3 rounded overflow-hidden mt-1">
        {/* <div className={styles.bar}></div> */}
        <div className="h-full w-40">
          <Image className="h-full w-full object-cover" src="/pics/bar-bg.svg" width={400} height={10} alt="Quiz Progess" />
        </div>
      </div>
    </div>
  );
}
