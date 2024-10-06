import { FC } from 'react';
import { FaPlay, FaPause, FaDownload, FaSpinner } from "react-icons/fa";
import { MdOutlineZoomIn } from "react-icons/md";
import { GifControllerProps } from '../types';

const GifController: FC<GifControllerProps> = (props) => {

    // props
    const {
        isLoading,
        isPlaying,
        index,
        handleGifSelect,
        downloadGif,
        handlePlayOrPause,
    } = props;

    return (
        <>
            <div className='video-controller-container'>
                <div className='video-controller-icon-wrapper' onClick={() => handleGifSelect(index)}>
                    <MdOutlineZoomIn className='icon' />
                </div>
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
        </>
    )

}

export default GifController;
