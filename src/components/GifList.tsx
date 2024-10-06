import { FC, useState } from 'react';
import GifItem from './GifItem';
import GifModal from './GifModal';
import { GifListProps } from '../types';

const GifList: FC<GifListProps> = (props) => {

    // props
    const { gifs } = props;

    // state
    const [selectedGif, setSelectedGif] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const handleModal = (value: boolean) => {
        setShowModal(value);
    }

    const handleGifSelect = (index: number) => {
        setSelectedGif(index);
        setShowModal(true);
    }

    return (
        <>
            {
                gifs.map((gif, index) => (
                    <GifItem
                        key={`${gif.id}_${gif.slug}`}
                        index={index}
                        originalImage={gif.images.original}
                        fixedImage={gif.images.fixed_width}
                        handleGifSelect={handleGifSelect}
                    />
                ))
            }
            {
                showModal &&
                <GifModal
                    fixedImage={gifs[selectedGif].images.fixed_width}
                    handleModal={handleModal}
                />
            }
        </>
    )

}

export default GifList;
