const express = require('express');
const app = express();
app.use(express.json());

const genres = [
    {id: 1, genre: 'Action'},
    {id: 2, genre: 'Comedy'},
    {id: 3, genre: 'Drama'},
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/genres', (req, res) => {
    res.send(genres);
});

app.get('/api/genres/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) {
        res.status(404).send('Genre with the given movie id does not exist');
        return;
    }
    else res.send(genre);
});

app.post('/api/genres/', (req, res) => {
    if(!req.body.genre || req.body.genre.length < 3){
        // Bad request
        res.status(400).send("Genre name cannot be empty and should be minimum 3 characters long");
        return;
    }
    
    const genre = {
        id: genres.length + 1,
        genre: req.body.genre,
    }

    genres.push(genre);
    res.send(genres);
});

app.put('/api/genres/:id', (req, res) => {
    var foundGenre = genres.find(genre => genre.id === parseInt(req.params.id));
    if(!foundGenre){
        res.status(404).send('Genre with given id not found');
        return;
    }

    if(!req.body.genre || req.body.genre.length < 3){
        // Bad request
        res.status(400).send("Genre name cannot be empty and should be minimum 3 characters long");
        return;
    }

    foundGenre.genre = req.body.genre;
    res.send(foundGenre);
});

app.delete('/api/genres/:id', (req, res) => {
    const genre = genres.find(genre => genre.id === parseInt(req.params.id));
    if(!genre){
        res.status(404).send('Genre with given id not found');
        return;
    }

    // Get the index of the course we're looking for (to delete)
    const index = genres.indexOf(genre);

    // Delete this course
    genres.splice(index, 1);

    res.send(genre);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> { console.log(`Listening on port number ${port}`)});
