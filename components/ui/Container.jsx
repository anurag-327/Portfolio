export default function Container({ children }) {
  return (
    <div className={`grid w-full  grid-cols-1 md:gap-4 p-2  xl:grid-cols-2`}>
      {children}
    </div>
  );
}
