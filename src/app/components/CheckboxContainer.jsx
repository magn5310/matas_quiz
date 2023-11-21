import Checkbox from "./Checkbox";

export default function CheckboxContainer({ children }) {
  return <section className="grid gap-2 w-full mt-2 sm:grid-cols-2 max-w-xl sm:gap-x-4 md:gap-4 md:gap-x-8">{children}</section>;
}
