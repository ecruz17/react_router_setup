const URL = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=4be79212067a0d972a7090b3973581fb&format=json';

function getMusicData() {
    return fetch(`${URL}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data.topartists.artist)
        .then(artists => artists.map(artist => {
            return {
                id: artist.mbid,
                name: artist.name,
                image: artist.image[0]['#text']
            }
        }))
}

export { getMusicData }
