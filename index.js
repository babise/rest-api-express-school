const express = require("express");
const app = express();

app.use(express.json());

let artists = require('./artists.json');
let categories = require('./categories.json');
let labels = require('./labels.json');

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

app.get('/labels', (req, res) => {
    res.status(200).json(labels)
})

app.get('/labels/:id', (req, res) => {
    const labelId = req.params.id;
    const label = labels.find(label => label.id == labelId);

    if (label) {
        res.status(200).json(label);
    } else {
        res.status(404).json({message: `label ${labelId} n'existe pas`})
    }
});

app.post("/labels", (req,res) => {
    const label = req.body;
    console.log('Nouvel labele: ', label);

    labels.push(label);

    res.status(201).json(labels);
});

app.put("/labels/:id", (req,res) => {
    const labelId = +req.params.id;
    const label = req.body;
    console.log("Editing item: ", labelId, " to be ", label);



    const updatedListlabels = [];

    labels.forEach(oldlabel => {
        if (oldlabel.id === labelId) {
            updatedListlabels.push(label);
        } else {
            updatedListlabels.push(oldlabel);
        }
    });

    labels = updatedListlabels;

    res.status(201).json(labels);
});

app.delete("/labels/:id", (req, res) => {
    const labelId = +req.params.id;

    console.log("Suppression de label avec l'Id : ", labelId);

    const filteredList = labels.filter(label => label.id !==  labelId);

    labels = filteredList;

    res.status(200).json(labels);
});

app.get('/categories', (req, res) => {
    res.status(200).json(categories)
})

app.get('/categories/:id', (req, res) => {
    const categoryId = req.params.id;
    const category = categories.find(category => category.id == categoryId);

    if (category) {
        res.status(200).json(category);
    } else {
        res.status(404).json({message: `category ${categoryId} n'existe pas`})
    }
});

app.post("/categories", (req,res) => {
    const category = req.body;
    console.log('Nouvel categorye: ', category);

    categories.push(category);

    res.status(201).json(categories);
});

app.put("/categories/:id", (req,res) => {
    const categoryId = +req.params.id;
    const category = req.body;
    console.log("Editing item: ", categoryId, " to be ", category);



    const updatedListcategories = [];

    categories.forEach(oldcategory => {
        if (oldcategory.id === categoryId) {
            updatedListcategories.push(category);
        } else {
            updatedListcategories.push(oldcategory);
        }
    });

    categories = updatedListcategories;

    res.status(201).json(categories);
});

app.delete("/categories/:id", (req, res) => {
    const categoryId = +req.params.id;

    console.log("Suppression de la category avec l'Id : ", categoryId);

    const filteredList = categories.filter(category => category.id !==  categoryId);

    categories = filteredList;

    res.status(200).json(categories);
});

app.listen(3000, () => {
    console.log("Allo ! Serveur lancé")
})

