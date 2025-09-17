import NavBar from "../ui/Navbar";

export default function Header() {
  return (
    <header className="sticky top-10 inset-x-0">
      <div className="hidden min-w-[400px] sm:flex pointer-events-auto px-6 rounded-lg bg-zinc-200/30 dark:bg-zinc-800/30 backdrop-blur-md shadow-sm w-fit mx-auto text-sm md:text-base border dark:border-zinc-800">
        <NavBar />
      </div>
    </header>
  );
}
