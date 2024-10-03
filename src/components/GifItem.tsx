import { FC, useState, useRef } from 'react';
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
    const [loading, setLoading] = useState(true);

    // ref
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handlePlay = () => {
        console.log('check - 1', loading);
        const video = videoRef.current;
        video?.play();
    }

    const handlePause = () => {
        console.log('check - 1', loading);
        const video = videoRef.current;
        video?.pause();
    }

    return (
        <div className='video-player-wrapper'>
            <button onClick={() => handlePlay()}>play</button>
            <button onClick={() => handlePause()}>pause</button>
            {
                loading && <div>Loading...</div>
            }
            <video
                ref={videoRef}
                width={fixedImage.width}
                height={fixedImage.height}
                poster={fixedImage.url}
                onLoadedData={() => setLoading(false)}
                className='video'
                autoPlay
                loop
                muted
            >
                <source src={fixedImage.mp4} type="video/mp4"></source>
            </video>
        </div>
    )

}

export default GifItem;
