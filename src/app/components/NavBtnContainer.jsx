export default function NavBtnContainer({ children }) {
  return (
    <div>
      <nav className="flex gap-2">{children}</nav>
    </div>
  );
}
