

export const getGifs = async( categoria ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=XPJ65lyvIKm1sUXsuOCk25syADaKT3Te`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //el ? es para aseguranos que viene la propiedad de images sino obviarlo
        }
    })

    return gifs;
}