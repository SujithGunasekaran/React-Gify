import { FC, useState, useRef, useEffect } from 'react';
import GifController from './GifController';
import { downloadFile } from '../utils';
import { GifItemProps } from '../types';
import posterImage from '../assets/pink-color-min.jpg';

const GifItem: FC<GifItemProps> = (props) => {

    // props
    const { fixedImage, index, handleGifSelect } = props;

    // state
    const [isPlaying, setIsPlaying] = useState(false);
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

    useEffect(() => {
        const element = videoRef.current;
        const observer = new IntersectionObserver((entries) => {
            if (!element) return;
            if (entries[0].isIntersecting) {
                element.poster = fixedImage.url;
            } else {
                element.poster = posterImage;
            }
        }, {
            threshold: 0.1
        });

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        }

    }, [fixedImage.url, videoRef])

    return (
        <div className='grid-item'>
            <video
                ref={videoRef}
                poster={posterImage}
                className='video'
                onLoadedData={() => setIsLoading(false)}
            >
                <source src={fixedImage.mp4} type="video/mp4"></source>
            </video>
            <GifController
                isLoading={isLoading}
                isPlaying={isPlaying}
                index={index}
                handleGifSelect={handleGifSelect}
                downloadGif={downloadGif}
                handlePlayOrPause={handlePlayOrPause}
            />
        </div>
    )

}

export default GifItem;
