import { FC } from 'react';
import searchSvg from '../assets/search-svg.svg';

const GifEmptyMessage: FC = () => {

    return (
        <div className='gif-empty-message-container'>
            <img src={searchSvg} alt='search-svg' className='image' />
            <h2 className='message'>Seems kind of empty here! Try Search/Changing your query</h2>
        </div>
    )

}

export default GifEmptyMessage;
