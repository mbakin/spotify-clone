import { useSession } from "next-auth/react";
import { useState } from "react";
import useSpotify from "../hook/useSpotify"
import { useRecoilState } from 'recoil';
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";

function Player() {

  const spotifyApi = useSpotify();
  const { data: session, status} = useSession();
  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState(40);

  return (
    <div >
      <div>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Player
