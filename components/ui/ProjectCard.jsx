import Image from "next/image";

export default function ({ data }) {
  return (
    <li className="box-border w-full min-h-[200px] max-h-[250px] mx-auto transition-all rounded-lg card bg-gray-50 dark:bg-zinc-900 border-project-landing border-zinc-200 dark:border-zinc-800">
      <a href={data.url || data.code} className="no-underline">
        <div className="px-6 py-3 no-underline text-zinc-700 dark:text-gray-400 ">
          <div className="flex items-center justify-start w-full gap-4">
            <Image
              className="aspect-square"
              src={data.logo}
              alt={data.name}
              width={40}
              height={40}
            />
            <p className="text-xl font-[550] first-letter:capitalize ">
              {data.name}
            </p>
          </div>
          <p className="text-base whitespace-pre-wrap ">{data.description}</p>
        </div>
      </a>
    </li>
  );
}
