import { useState } from 'react';

export default function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label
      className={`flex w-full justify-between border border-solid py-1 px-2 rounded border-[#FF4F6B] cursor-pointer only-after:bg-[#ff4f6b] hover:bg-red-50 ${
        isChecked ? 'bg-[#ff4f6b] text-white  hover:bg-red-300' : 'text-[#FF4F6B]'
      }`}
      htmlFor={props.label}

    >
      {props.label}
      <input
        className="rounded-full  accent-[#FF4F6B] border border-solid border-white outline-[#FF4F6B]"
        id={props.label}
        type="checkbox"
        checked={isChecked}
        onChange={toggleCheckbox}
      />
    </label>
  );
}
