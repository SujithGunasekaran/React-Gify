import { FC, useState, useRef } from 'react';
import { FaPlay, FaPause, FaDownload, FaSpinner } from "react-icons/fa";
import { downloadFile } from '../utils';
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
        try {
            setIsDownloading(true);
            await downloadFile(fixedImage.url);
        } catch (error) {
            console.log('error while downloading the gif', error);
        } finally {
            setIsDownloading(false);
        }
    }

    return (
        <div className='video-player-wrapper'>
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
