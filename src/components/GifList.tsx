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
        <div className='gif-list-container'>
            {
                gifs.map((gif) => (
                    <GifItem
                        key={gif.id}
                        title={gif.title}
                        originalImage={gif.images.original}
                        fixedImage={gif.images.fixed_width}
                    />
                ))
            }
        </div>
    )

}

export default GifList;
