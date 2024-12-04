import { useRef, useState } from "react";
import "./music-player.css";
import song from "../../../assets/songs/ChasingNEFFEX.mp3";
import thumbnail from "../../../assets/songs/thumbnail.jpg";

function MusicPlayer() {
    const songName = "ตกหลุมรักซ้ำๆ (repeat)";
    const songArtist = "MEAN Band x PEEMWASU BUS";
    const songSrc = song;
    const songAvatar = thumbnail;
    const [currentMusicDetails, setCurrentMusicDetails] = useState({
        songName: songName,
        songArtist: songArtist,
        songSrc: songSrc,
        songAvatar: songAvatar,
    });

    //UseStates Variables
    const [audioProgress, setAudioProgress] = useState(0);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [musicIndex, setMusicIndex] = useState(0);
    const [musicTotalLength, setMusicTotalLength] = useState("04 : 38");
    const [musicCurrentTime, setMusicCurrentTime] = useState("00 : 00");

    const currentAudio = useRef();

    const handleMusicProgressBar = (e) => {
        setAudioProgress(e.target.value);
        currentAudio.current.currentTime =
            (e.target.value * currentAudio.current.duration) / 100;
    };

    //Change Avatar Class
    let avatarClass = ["objectFitCover", "objectFitContain", "none"];
    const [avatarClassIndex, setAvatarClassIndex] = useState(0);
    const handleAvatar = () => {
        if (avatarClassIndex >= avatarClass.length - 1) {
            setAvatarClassIndex(0);
        } else {
            setAvatarClassIndex(avatarClassIndex + 1);
        }
    };

    //Play Audio Function
    const handleAudioPlay = () => {
        if (currentAudio.current.paused) {
            currentAudio.current.play();
            setIsAudioPlaying(true);
        } else {
            currentAudio.current.pause();
            setIsAudioPlaying(false);
        }
    };

    const musicAPI = [
        {
            songName: songName,
            songArtist: songArtist,
            songSrc: songSrc,
            songAvatar: songAvatar,
        },
    ];

    const handleNextSong = () => {
        if (musicIndex >= musicAPI.length - 1) {
            let setNumber = 0;
            setMusicIndex(setNumber);
            updateCurrentMusicDetails(setNumber);
        } else {
            let setNumber = musicIndex + 1;
            setMusicIndex(setNumber);
            updateCurrentMusicDetails(setNumber);
        }
    };

    const handlePrevSong = () => {
        if (musicIndex === 0) {
            let setNumber = musicAPI.length - 1;
            setMusicIndex(setNumber);
            updateCurrentMusicDetails(setNumber);
        } else {
            let setNumber = musicIndex - 1;
            setMusicIndex(setNumber);
            updateCurrentMusicDetails(setNumber);
        }
    };

    const updateCurrentMusicDetails = (number) => {
        let musicObject = musicAPI[number];
        currentAudio.current.src = musicObject.songSrc;
        currentAudio.current.play();
        setCurrentMusicDetails({
            songName: musicObject.songName,
            songArtist: musicObject.songArtist,
            songSrc: musicObject.songSrc,
            songAvatar: musicObject.songAvatar,
        });
        setIsAudioPlaying(true);
    };

    const handleAudioUpdate = () => {
        //Input total length of the audio
        let minutes = Math.floor(currentAudio.current.duration / 60);
        let seconds = Math.floor(currentAudio.current.duration % 60);
        let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${
            seconds < 10 ? `0${seconds}` : seconds
        }`;
        setMusicTotalLength(musicTotalLength0);

        //Input Music Current Time
        let currentMin = Math.floor(currentAudio.current.currentTime / 60);
        let currentSec = Math.floor(currentAudio.current.currentTime % 60);
        let musicCurrentT = `${
            currentMin < 10 ? `0${currentMin}` : currentMin
        } : ${currentSec < 10 ? `0${currentSec}` : currentSec}`;
        setMusicCurrentTime(musicCurrentT);

        const progress = parseInt(
            (currentAudio.current.currentTime / currentAudio.current.duration) *
                100
        );
        setAudioProgress(isNaN(progress) ? 0 : progress);
    };

    return (
        <>
            <div className="floating">
                <audio
                    src={songSrc}
                    ref={currentAudio}
                    onEnded={handleNextSong}
                    onTimeUpdate={handleAudioUpdate}
                ></audio>
                <div className="music-Container">
                    <div className="flex items-center gap-2">
                        <img
                            src={currentMusicDetails.songAvatar}
                            className={`${avatarClass[avatarClassIndex]} !w-12 !h-12`}
                            onClick={handleAvatar}
                            alt="song Avatar"
                            id="songAvatar"
                        />
                        <div className="flex flex-col items-start ">
                            <p className="music-Head-Name">
                                {currentMusicDetails.songName}
                            </p>
                            <p className="music-Artist-Name">
                                {currentMusicDetails.songArtist}
                            </p>
                        </div>
                    </div>
                    <div className="musicTimerDiv">
                        <p className="musicCurrentTime">{musicCurrentTime}</p>
                        <p className="musicTotalLenght">{musicTotalLength}</p>
                    </div>
                    <input
                        type="range"
                        name="musicProgressBar"
                        className="musicProgressBar"
                        value={audioProgress}
                        onChange={handleMusicProgressBar}
                    />
                    <div className="musicControlers flex justify-around items-center w-full">
                        <button
                            className="fa-solid fa-backward musicControler disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={handlePrevSong}
                            disabled={musicIndex === 0}
                        />
                        <i
                            className={`fa-solid ${
                                isAudioPlaying
                                    ? "fa-pause-circle"
                                    : "fa-circle-play"
                            } playBtn`}
                            onClick={handleAudioPlay}
                        ></i>
                        <button
                            className="fa-solid fa-forward musicControler disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={handleNextSong}
                            disabled={musicIndex === 0}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MusicPlayer;
