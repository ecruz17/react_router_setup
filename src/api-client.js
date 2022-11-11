const URL = '';

4be79212067a0d972a7090b3973581fb

4b739ebd2e27013da048e05c96500c58

emir_cruz17

function getMusicData() {
    return fetch(`${URL}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((res) => res.json())
        .then((data) => data.topartist.artist)
        .then((artists) => artists.map((artist) => {
            return {
                id: artist.mid,
                name: artist.name,
                image: artist.image[0]['#text']
            }
        }));
}

export { getMusicData };
