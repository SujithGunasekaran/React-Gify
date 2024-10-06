export interface ImageObject {
    mp4: string,
    width: string,
    height: string,
    url: string,
    webp: string,
}

export interface GifObject {
    id: string,
    title: string,
    slug: string,
    images: {
        original: ImageObject,
        fixed_width: ImageObject,
    },
}

export interface GifListProps {
    gifs: Array<GifObject>,
}

export interface GifItemProps {
    index: number,
    originalImage: ImageObject,
    fixedImage: ImageObject,
    handleGifSelect: (index: number) => void,
}

export interface GifControllerProps {
    isLoading: boolean,
    isPlaying: boolean,
    index: number,
    downloadGif: () => void,
    handlePlayOrPause: () => void,
    handleGifSelect: (index: number) => void,
}

export interface GifModalProps {
    fixedImage: ImageObject,
    handleModal: (value: boolean) => void,
}
