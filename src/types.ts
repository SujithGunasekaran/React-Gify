export interface ImageObject {
    mp4: string,
    width: string,
    height: string,
    url: string,
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
