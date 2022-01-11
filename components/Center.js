import { useSession } from "next-auth/react";
import { ChevronDownIcon } from '@heroicons/react/outline';

function Center() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-grow text-white">
      <header>
        <div className="flex items-center bg-[#18D860] space-x-3 p-1 pr-2 opacity-90 hover:opacity-80 cursor-pointer rounded-full">
        <h2>{session?.user.name}</h2>
        <ChevronDownIcon className='w-5 h-5' />
        </div>
      </header>
    </div>
  );
}

export default Center;
