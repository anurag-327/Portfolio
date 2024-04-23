export default function Grid({ children }) {
  return (
    <ul
      className={`grid grid-cols-1 gap-3 p-2 list-none sm:grid-cols-2 md:gap-5`}
    >
      {children}
    </ul>
  );
}
