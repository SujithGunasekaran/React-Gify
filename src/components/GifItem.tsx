import { FC, useState, useRef } from 'react';
import { FaPlay, FaPause, FaDownload, FaSpinner } from "react-icons/fa";
import { ImageObject } from '../types';

interface GifItemProps {
    title: string,
    originalImage: ImageObject,
    fixedImage: ImageObject,
}

const GifItem: FC<GifItemProps> = (props) => {

    // props
    const { fixedImage } = props;

    // state
    const [isPlaying, setIsPlaying] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [isDownloading, setIsDownloading] = useState(false);

    // ref
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handlePlayOrPause = () => {
        if (isPlaying) {
            videoRef.current?.pause();
            setIsPlaying(false);
        } else {
            videoRef.current?.play();
            setIsPlaying(true);
        }
    }

    const downloadGif = async () => {
        if (isDownloading) return;
        setIsDownloading(true);
        const gifUrl = fixedImage.url;
        const response = await fetch(gifUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'funGif.gif');
        document.body.appendChild(link);
        link.click();
        link?.parentNode?.removeChild(link);
        setIsDownloading(false);
    }

    return (
        <div className='video-player-wrapper'>
            {/* {
                isLoading &&
                <div style={{ width: `${fixedImage.width}px`, height: `25vh` }}>
                    <div className='skeleton-box video'></div>
                </div>
            } */}
            <video
                ref={videoRef}
                width={fixedImage.width}
                height={fixedImage.height}
                poster={fixedImage.url}
                className='video'
                onLoadedData={() => setIsLoading(false)}
                autoPlay
                loop
                muted
            >
                <source src={fixedImage.mp4} type="video/mp4"></source>
            </video>
            <div className='video-controller-container'>
                <div className='video-controller-icon-wrapper' onClick={downloadGif}>
                    <FaDownload className='icon' />
                </div>
                <div className='video-controller-icon-wrapper' onClick={handlePlayOrPause}>
                    {
                        isLoading ? <FaSpinner className='icon' /> :
                            (
                                isPlaying ? <FaPause className='icon' /> :
                                    <FaPlay className='icon' />
                            )
                    }
                </div>
            </div>
        </div>
    )

}

export default GifItem;
