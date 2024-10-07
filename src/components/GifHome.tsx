/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import GifList from './GifList';
import GifEmptyMessage from './GifEmptyMessage';
import GifGridLoader from './GifGridLoader';
import { getGifUrl } from '../utils';
import { GIF_LIMIT, GRID_CARD_LOADER } from '../constants';

interface HomeSearchProps {
    pageType: 'search' | 'trending' | 'random',
}

const HomeSearch: FC<HomeSearchProps> = (props) => {

    // props
    const { pageType } = props;

    // state
    const [gifs, setGifs] = useState<Array<any>>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const searchGify = async () => {
        try {
            setIsLoading(true);
            const offset = (currentPage * GIF_LIMIT) + 1;
            const url = getGifUrl(pageType, { searchText, offset });
            const response = await axios.get(url);
            setHasError(false);
            if (response.data && (pageType !== 'random')) {
                const { data = [], pagination = {} } = response.data;
                const totalResultCount = pagination.count + pagination.offset;
                setGifs((prevState) => [
                    ...prevState,
                    ...data,
                ]);
                setCurrentPage((prevState) => prevState + 1);
                if (totalResultCount >= pagination.total_count) {
                    setHasMore(false);
                } else {
                    setHasMore(true);
                }
            } else {
                setGifs([response.data.data]);
            }
        } catch (error) {
            setHasError(true);
            console.log('search error', error);
        } finally {
            setIsLoading(false);
        }
    }

    const updateSearchText = (query: string) => {
        setSearchText(query);
    }

    useEffect(() => {
        if (searchText) {
            searchGify();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchText])

    useEffect(() => {
        if (pageType !== 'search') {
            searchGify();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                pageType === 'search' &&
                <SearchInput
                    updateSearchText={updateSearchText}
                />
            }
            {
                hasError &&
                <div className='gify-error-message'>The API limit has been reached. Please return in 1 hour for more access.</div>
            }
            {
                (gifs.length === 0 && !isLoading) &&
                <GifEmptyMessage />
            }
            {
                gifs.length > 0 &&
                <div className='gif-list-container'>
                    <GifList
                        gifs={gifs}
                    />
                </div>
            }
            {
                isLoading &&
                <div className='gif-list-loaded-container'>
                    <GifGridLoader
                        loaderCount={GRID_CARD_LOADER[pageType]}
                    />
                </div>
            }
            {
                hasMore &&
                <button
                    onClick={() => searchGify()}
                    className='gif-load-more-btn'
                    disabled={isLoading}
                >
                    Load more
                </button>
            }
        </>
    )
}

export default HomeSearch;
