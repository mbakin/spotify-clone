import { useSession } from "next-auth/react";
import { useState } from "react";
import useSpotify from "../hook/useSpotify";
import { useRecoilState } from "recoil";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import useSongInfo from "../hook/useSongInfo";

function Player() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState(40);

  const songInfo = useSongInfo();

  return (
    <div>
      <div>
        <img className="hidden md:inline h-10 w-10" src={songInfo?.album.images?.[0]?.url} alt="" />
      </div>
    </div>
  );
}

export default Player;
