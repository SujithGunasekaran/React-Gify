import { FC } from 'react';

interface GifGridLoaderProps {
    loaderCount: number
};

const GifGridLoader: FC<GifGridLoaderProps> = ({ loaderCount }) => {
    return (
        <>
            {
                new Array(loaderCount).fill(0).map((_, index) => (
                    <div key={index} className='skeleton-box'></div>
                ))
            }
        </>

    )
}

export default GifGridLoader;
