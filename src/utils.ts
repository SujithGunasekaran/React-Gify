import { BASE_URL, GIFY_API_KEY, GIF_LIMIT } from './constants';

interface params {
    searchText: string,
    offset: number
};

export const getGifUrl = (pageType: string, params: params) => {
    const { searchText, offset } = params;
    if (pageType === 'trending') {
        return `${BASE_URL}/trending?api_key=${GIFY_API_KEY}&limit=${GIF_LIMIT}&offset=${offset}&bundle=clips_grid_picker&rating=g`;
    } else if (pageType === 'search') {
        return `${BASE_URL}/search?api_key=${GIFY_API_KEY}&q=${searchText}&limit=${GIF_LIMIT}&offset=${offset}&bundle=clips_grid_picker&rating=g`;
    } else {
        return `${BASE_URL}/random?api_key=${GIFY_API_KEY}&rating=g`;
    }
}

export const downloadFile = (url: string) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        try {
            const gifUrl = url;
            const response = await fetch(gifUrl);
            const blob = await response.blob();
            const windoUrl = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = windoUrl;
            link.setAttribute('download', 'funGif.gif');
            document.body.appendChild(link);
            link.click();
            link?.parentNode?.removeChild(link);
            resolve('Success');
        } catch (error) {
            reject(error);
        }
    })
}
