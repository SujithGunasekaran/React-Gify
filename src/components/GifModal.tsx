import { FC } from 'react';
import { GifModalProps } from '../types';

const GifModal: FC<GifModalProps> = (props) => {

    // props
    const { fixedImage, handleModal } = props;

    return (
        <div className='gif-modal' onClick={() => handleModal(false)}>
            <video poster={fixedImage.url} className='video'>
                <source src={fixedImage.mp4} type="video/mp4"></source>
            </video>
        </div>
    )

}

export default GifModal;
