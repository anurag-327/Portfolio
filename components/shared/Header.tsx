import NavBar from "../ui/Navbar";

export default function Header() {
  return (
    <header className="sticky z-50 top-6 inset-x-0">
      <div className="w-[90%] md:w-fit md:min-w-[400px] sm:flex pointer-events-auto px-6 rounded-lg bg-zinc-200/30 dark:bg-zinc-800/30 backdrop-blur-md shadow-sm mx-auto text-sm md:text-base border dark:border-zinc-800">
        <NavBar />
      </div>
    </header>
  );
}
