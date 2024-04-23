import Repositiories from "./mini-components/Repositiories";

export default function () {
  return (
    <div className="w-full mt-10">
      <h2 className="text-4xl font-bold text-violet-700 dark:text-white">
        # Top Repositories
      </h2>
      <Repositiories />
    </div>
  );
}
