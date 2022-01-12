import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
function Center() {
  const { data: session } = useSession();

  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-red-200 space-x-3 p-1 pr-2 pl-4 opacity-90 hover:opacity-80 cursor-pointer rounded-full">
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
      </header>
      <section
        className={`flex-items-end space-x-7 bg-gradient-to-b to-black from-red-500 h-80 text-white p-8 `}
      >
        <h1>Hello {session?.user.name}</h1>
      </section>
    </div>
  );
}

export default Center;
