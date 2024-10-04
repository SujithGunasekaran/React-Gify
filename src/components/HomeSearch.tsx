/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import GifList from './GifList';
import GifGridLoader from './GifGridLoader';
import { GIF_LIMIT } from '../constants';

interface HomeSearchProps {
    isSearchEnabled: boolean,
    isTrending: boolean,
    isRandom: boolean,
}

const HomeSearch: FC<HomeSearchProps> = (props) => {

    // props
    const { isSearchEnabled, isTrending, isRandom } = props;

    // state
    const [gifs, setGifs] = useState<Array<any>>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const searchGify = async () => {
        try {
            setIsLoading(true);
            const offset = (currentPage * GIF_LIMIT) + 1;
            let url = '';
            if (isTrending) {
                url = `https://api.giphy.com/v1/gifs/trending?api_key=KtnqluxUOE5fGEzAuzGp2xoNAYI3vq9k&limit=${GIF_LIMIT}&offset=${offset}&bundle=clips_grid_picker`;
            } else if (isSearchEnabled) {
                url = `https://api.giphy.com/v1/gifs/search?api_key=KtnqluxUOE5fGEzAuzGp2xoNAYI3vq9k&q=${searchText}&limit=${GIF_LIMIT}&offset=${offset}&bundle=clips_grid_picker`;
            } else {
                url = 'https://api.giphy.com/v1/gifs/random?api_key=KtnqluxUOE5fGEzAuzGp2xoNAYI3vq9k'
            }
            const response = await axios.get(url);
            if (response.data && (isSearchEnabled || isTrending)) {
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
        if (isTrending || isRandom) {
            searchGify();
        }
    }, [])

    return (
        <>
            {
                isSearchEnabled &&
                <SearchInput
                    updateSearchText={updateSearchText}
                />
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
                    <GifGridLoader />
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
