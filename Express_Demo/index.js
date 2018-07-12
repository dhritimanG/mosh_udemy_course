const express = require('express');
const app = express();

const courses = [
    {id: 1, course: 'course1'},
    {id: 2, course: 'course2'},
    {id: 3, course: 'course3'},
];

app.get('/', (req,res) => {
    res.send('Hello World');
});


app.get('/api/courses', (req,res) => {
    res.send([1,2,3,4,5]);
});


app.get('/api/courses/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('No course with given ID was found');
    else res.send(course);
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> { console.log(`Listening on port number ${port}`)});
