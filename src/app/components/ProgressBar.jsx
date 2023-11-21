import Image from "next/image";

export default function ProgressBar(props) {
  const widthPercentage = Math.round((props.currentQuestion / (props.totalQuestions - 1)) * 100);
  const progressBarWidth = {
    width: `${widthPercentage}%`,
  };

  return (
    <div className="px-2 py-1 md:px-8 w-full">
      <div className="flex justify-between">
        <p className="text-xs font-bold text-rose-500">{widthPercentage}%</p>
        <p className="text-xs font-bold text-rose-500">200 produkter fundet</p>
      </div>
      <div className="bg-rose-200 w-full h-3 rounded overflow-hidden mt-1">
        <Image style={progressBarWidth} className="h-full object-cover" src="/pics/bar-bg.svg" width={0} height={10} alt="Quiz Progress" />
      </div>
    </div>
  );
}
