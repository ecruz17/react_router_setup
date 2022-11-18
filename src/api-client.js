const URL = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=4be79212067a0d972a7090b3973581fb&format=json';

// async function getMusicData() {
//     const res = await fetch(`${URL}`, {
//         method: 'GET',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//         }
//     }).catch(err => console.log(err.json()));
//     const data = await res.json();
//     const artists = data.topartists.artist;
//     return artists.map((artist) => {
//         return {
//             id: artist.mbid,
//             name: artist.name,
//             image: artist.image[0]['#text']
//         };
//     });
// }

export { URL };
