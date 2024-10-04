import { FC } from 'react';

const GifGridLoader: FC = () => {
    return (
        <>
            {
                new Array(10).fill(0).map((_, index) => (
                    <div key={index} className='skeleton-box'></div>
                ))
            }
        </>

    )
}

export default GifGridLoader;
