export default function NavBtnContainer({ children }) {
  return (
    <div className="self-end bottom-2 py-2 md:py-4">
      <nav className="flex flex-row gap-2 w-60 mx-auto">{children}</nav>
    </div>
  );
}
