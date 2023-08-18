export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=bSMq3g33ozBzJGHKeS1tx9nc3am65S7g&q=${ category }&limit=5`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}