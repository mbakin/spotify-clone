import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { shuffle } from "lodash";
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState, playlistState } from "../atoms/playlistAtom";
import useSpotify from '../hook/useSpotify';
import Songs from "./Songs";

const colors = [
  "from-indigo-500",
  "from-yellow-500",
  "from-purple-500",
  "from-red-500",
  "from-green-500",
  "from-blue-500",
  "from-pink-500",
];

function Center() {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);

  useEffect(() => {
    setColor(shuffle(colors)[0]);
  }, [playlistId]);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body);
      })
      .catch((err) => console.log(err));
  }, [spotifyApi, playlistId]);


  return (
    <div className="flex-grow h-screen overflow-x-scroll scrollbar-hide">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-black text-white space-x-3 p-1 pr-2  opacity-90 hover:opacity-80 cursor-pointer rounded-full">
          <img className="rounded-full w-10 h-10" src={session?.user.image} url="user-avatar" />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
      </header>
      <section
        className={`flex-items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8 pt-16 `}
      >
        <img className="h-44 w-44 shadow-2xl" src={playlist?.images?.[0]?.url} alt="playlist-image" />
        <div>
          <p>PLAYLIST</p>
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">{playlist?.name}</h1>
        </div>
      </section>
      <div>
        <Songs />
      </div>
    </div>
  );
}

export default Center;
