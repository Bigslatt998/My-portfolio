    import React, { useState, useRef, useEffect } from "react";
    import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
    import { FaPlay, FaPause, FaForward, FaBackward, FaSun, FaMoon, FaVolumeUp, FaRandom, FaRedo, FaBars } from "react-icons/fa";
    import { Howl } from "howler";
    import './MusicPlay.css'
    import Morayo from '../assets/Morayo.jpg'
    import AsakeMilitary from '../assets/AsakeMilitary.jpg'

    const MusicPlay = () => {
        const initialTracks = [
            { id: '1', IMG: Morayo, name: "Wizkid-Trouble Mind", url: "https://files.vistanaij.com/wp-content/uploads/music/2024/11/Wizkid-Troubled-Mind-(Vistanaij.com).mp3" },
            { id: '2', IMG: Morayo, name: "Wizkid-Karamo", url: "https://files.vistanaij.com/wp-content/uploads/music/2024/11/Wizkid-Karamo-(Vistanaij.com).mp3" },
            { id: '3', IMG: Morayo, name: "Wizkid-Kese-Dance", url: "https://files.vistanaij.com/wp-content/uploads/music/2024/11/Wizkid-Kese-Dance-(Vistanaij.com).mp3" },
            { id: '4', IMG: Morayo, name: "Wizkid-Bad-Girl-feat-Asake", url: "https://files.vistanaij.com/wp-content/uploads/music/2024/11/Wizkid-Bad-Girl-feat-Asake-(Vistanaij.com).mp3" },
            { id: '5', IMG: Morayo, name: "Wizkid-Time", url: "https://files.vistanaij.com/wp-content/uploads/music/2024/11/Wizkid-Time-(Vistanaij.com).mp3" },
            { id: '6', IMG: Morayo, name: "Wizkid_-_Piece_Of_My_Heart_feat_Brent_Faiyaz", url: "https://files.vistanaij.com/wp-content/uploads/2024/10/Wizkid_-_Piece_Of_My_Heart_feat_Brent_Faiyaz__Vistanaij.com.ng.mp3" },
            { id: '7', IMG: Morayo, name: "Wizkid-Break-Me-Down", url: "https://files.vistanaij.com/wp-content/uploads/music/2024/11/Wizkid-Break-Me-Down-(Vistanaij.com).mp3" },
            { id: '8', IMG: Morayo, name: "Wizkid-Bend", url: "https://files.vistanaij.com/wp-content/uploads/music/2024/11/Wizkid-Bend-(Vistanaij.com).mp3" },
            { id: '9', IMG: Morayo, name: "Wizkid-A-Million-Blessings", url: "https://files.vistanaij.com/wp-content/uploads/music/2024/11/Wizkid-A-Million-Blessings-(Vistanaij.com).mp3" },
            { id: '10', IMG: Morayo, name: "Wizkid-Apres-Minuit-feat-Tiakola", url: "https://files.vistanaij.com/wp-content/uploads/music/2024/11/Wizkid-Apres-Minuit-feat-Tiakola-(Vistanaij.com).mp3" },
            { id: '11', IMG: Morayo, name: "Wizkid-Bad-For-You-feat-Jazmine-Sullivan", url: "https://files.vistanaij.com/wp-content/uploads/music/2024/11/Wizkid-Bad-For-You-feat-Jazmine-Sullivan-(Vistanaij.com).mp3" },
            { id: '12', IMG: Morayo, name: "Wizkid-Soji", url: "https://files.vistanaij.com/wp-content/uploads/music/2024/11/Wizkid-Soji-(Vistanaij.com).mp3" },
            { id: '13', IMG: Morayo, name: "Wizkid-Dont-Care", url: "https://files.vistanaij.com/wp-content/uploads/music/2024/11/Wizkid-Dont-Care-(Vistanaij.com).mp3" },
            { id: '14', IMG: Morayo, name: "Wizkid-Pray", url: "https://files.vistanaij.com/wp-content/uploads/music/2024/11/Wizkid-Pray-(Vistanaij.com).mp3" },
            { id: '15', IMG: Morayo, name: "Wizkid-Lose", url: "https://files.vistanaij.com/wp-content/uploads/music/2024/11/Wizkid-Lose-(Vistanaij.com).mp3" },
            { id: '16', IMG: Morayo, name: "Wizkid-Slow-feat-Anais-Cardot", url: "https://files.vistanaij.com/wp-content/uploads/music/2024/11/Wizkid-Slow-feat-Anais-Cardot-(Vistanaij.com).mp3" },
            { id: '17', IMG: AsakeMilitary, name: "Asake-Military", url: "https://files.vistanaij.com/wp-content/uploads/music/2025/02/Asake-Military-(Vistanaij.com).mp3" },
        ];

        const [tracks, setTracks] = useState(initialTracks);
        const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
        const [isPlaying, setIsPlaying] = useState(false);
        const [progress, setProgress] = useState(0);
        const [volume, setVolume] = useState(1);
        const [isShuffle, setIsShuffle] = useState(false);
        const [isRepeat, setIsRepeat] = useState(false);
        const [isDarkMode, setIsDarkMode] = useState(false);
        const [currentTime, setCurrentTime] = useState("0:00");
        const [duration, setDuration] = useState("0:00");
        const soundRef = useRef(null);
        
        // Initialize Howl audio player
        useEffect(() => {
            if (soundRef.current) {
            soundRef.current.unload();
            }
        
            soundRef.current = new Howl({
            src: [tracks[currentTrackIndex].url],
            autoplay: isPlaying,
            volume: volume,
            onend: () => handleNext(),
            onplay: () => setIsPlaying(true),
            onpause: () => setIsPlaying(false),
            onload: () => {
                const durationInSeconds = soundRef.current.duration();
                setDuration(formatTime(durationInSeconds));
            },
            });

            return () => {
                if (soundRef.current) {
                soundRef.current.unload();
                } //Clean up funtion
            };
            }, [currentTrackIndex, tracks, volume]);
        
            // Update progress bar and current time every second
            useEffect(() => {
            const interval = setInterval(() => {
                if (soundRef.current) {
                const seek = soundRef.current.seek();
                setProgress((seek / soundRef.current.duration()) * 100);
                setCurrentTime(formatTime(seek));
                }
            }, 500);
        
            return () =>
                 clearInterval(interval);  //Clean up funtion

            }, []);
        
            // Format time (seconds to mm:ss)
            const formatTime = (seconds) => {
            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
            };
        
            // Play/Pause functionality
            const handlePlayPause = () => {
            if (isPlaying) {
                soundRef.current.pause();
            } else {
                soundRef.current.play();
            }
            setIsPlaying(!isPlaying);
            };
        
            // Next track functionality
            const handleNext = () => {
            let nextIndex; // Strore the Index of the Next track
            if (isShuffle) {
                nextIndex = Math.floor(Math.random() * tracks.length);
            } else {
                nextIndex = (currentTrackIndex + 1) % tracks.length;
            }
            setCurrentTrackIndex(nextIndex);
            };
        
            // Previous track functionality
            const handlePrevious = () => {
            let prevIndex; // Strore the Index of the Prev track
            if (isShuffle) {
                prevIndex = Math.floor(Math.random() * tracks.length);
            } else {
                prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
            }
            setCurrentTrackIndex(prevIndex);
            };
        
            // Drag-and-drop functionality for playlist
            const handleDragEnd = (result) => {
            if (!result.destination) 
                return;
        
            const reorderedTracks = Array.from(tracks);
            const [removed] = reorderedTracks.splice(result.source.index, 1);
            reorderedTracks.splice(result.destination.index, 0, removed);
        
            setTracks(reorderedTracks);
            };
        
            // Seek functionality
            const handleSeek = (e) => {
            const seekPosition = (e.nativeEvent.offsetX / e.target.offsetWidth) * soundRef.current.duration();
            soundRef.current.seek(seekPosition);
            };
        
            // Volume control
            const handleVolumeChange = (e) => {
            const newVolume = parseFloat(e.target.value);
            if (newVolume >= 0 && newVolume <= 1){
                setVolume(newVolume);
            }
            if(soundRef.current){
                soundRef.current.volume = newVolume
            }

            console.log('Ols', soundRef.current.volume)
            console.log('NEw', newVolume)
            };
        
            // Track upload functionality
            const handleFileUpload = (e) => {
            const file = e.target.files[0];
            if (file) {
                const newTrack = {
                id: Date.now().toString(),
                name: file.name,
                url: URL.createObjectURL(file),
                };
                setTracks([...tracks, newTrack]);
            }
            };
        
            // Toggle shuffle
            const toggleShuffle = () => {
            setIsShuffle(!isShuffle);
            };
        
            // Toggle repeat
            const toggleRepeat = () => {
            setIsRepeat(!isRepeat);
            };
        
            // Toggle dark mode
            const toggleDarkMode = () => {
            setIsDarkMode(!isDarkMode);
            };

            // Handle song click
             const HandleSongClick = (index) => {
                setCurrentTrackIndex(index)
                if (!isPlaying){
                    setIsPlaying(true)
                }
             }
        
    return (
        <div className={ ` ${"App"} ${isDarkMode ? "dark" : "light"}`}>
        <div className="player">
            <h1>Music Player</h1>
            <img src={tracks[currentTrackIndex].IMG}/>
            <div className="TractDisplay">
            <p>{tracks[currentTrackIndex].name}</p>
            </div>
            <div className="controls">
            <button onClick={handlePrevious}>
                <FaBackward />
            </button>
            <button onClick={handlePlayPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={handleNext}>
                <FaForward />
            </button>
            <button onClick={toggleShuffle} className={isShuffle ? "active" : ""}>
                <FaRandom />
            </button>
            <button onClick={toggleRepeat} className={isRepeat ? "active" : ""}>
                <FaRedo />
            </button>
            </div>
            <div className="progress-bar" onClick={handleSeek}>
            <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="time-display">
            <span>{currentTime}</span>
            <span>{duration}</span>
            </div>
            <div className="volume-control">
            <FaVolumeUp />
            <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
            />
            </div>
            <div className="playlist">
            <h2>Playlist</h2>
                    <ul>
                    {tracks.map((track, index) => (
                            <li key={index}  className={currentTrackIndex === index ? "active" : ""}
                            onClick={() => HandleSongClick(index)}>
                            {track.name}
                            </li>
                    ))}
                    </ul>
            </div>
            <div className="upload-section">
            <input type="file" accept="audio/*" onChange={handleFileUpload} />
            </div>
            <button className="theme-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
        </div>
        </div>
    )
    }

    export default MusicPlay