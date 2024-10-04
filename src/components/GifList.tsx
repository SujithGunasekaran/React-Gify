import { FC } from 'react';
import GifItem from './GifItem';
import { GifObject } from '../types';

interface GifListProps {
    gifs: Array<GifObject>,
}

const GifList: FC<GifListProps> = (props) => {

    // props
    const { gifs } = props;

    return (
        <>
            {
                gifs.map((gif) => (
                    <GifItem
                        key={`${gif.id}_${gif.slug}`}
                        title={gif.title}
                        originalImage={gif.images.original}
                        fixedImage={gif.images.fixed_width}
                    />
                ))
            }
        </>
    )

}

export default GifList;
