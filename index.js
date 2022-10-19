const express = require("express");
const app = express();

app.use(express.json());

let artists = require('./artists.json');

app.get('/artists', (req, res) => {
    res.status(200).json(artists)
})

app.get('/artists/:id', (req, res) => {
    const artistId = req.params.id;
    const artist = artists.find(artist => artist.id == artistId);

    if (artist) {
        res.status(200).json(artist);
    } else {
        res.status(404).json({message: `artist ${artistId} n'existe pas`})
    }
});

app.post("/artists", (req,res) => {
    const artist = req.body;
    console.log('Nouvel artiste: ', artist);

    artists.push(artist);

    res.status(201).json(artists);
});

app.put("/artists/:id", (req,res) => {
    const artistId = +req.params.id;
    const artist = req.body;
    console.log("Editing item: ", artistId, " to be ", artist);

    const updatedListArtists = [];

    artists.forEach(oldArtist => {
        if (oldArtist.id === artistId) {
            updatedListArtists.push(artist);
        } else {
            updatedListArtists.push(oldArtist);
        }
    });

    artists = updatedListArtists;

    res.status(201).json(artists);
});

app.delete("/artists/:id", (req, res) => {
    const artistId = +req.params.id;

    console.log("Suppression de l'artiste avec l'Id : ", artistId);

    const filteredList = artists.filter(artist => artist.id !==  artistId);

    artists = filteredList;

    res.status(200).json(artists);
});

app.listen(3000, () => {
    console.log("Allo ! Serveur lancé")
})

