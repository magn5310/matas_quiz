export default function NavBtnContainer({ children }) {
  return (
    <div>
      <nav className="flex flex-row gap-2 w-60 mx-auto mt-6">{children}</nav>
    </div>
  );
}
