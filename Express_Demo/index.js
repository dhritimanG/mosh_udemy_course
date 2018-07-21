const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, course: 'course1'},
    {id: 2, course: 'course2'},
    {id: 3, course: 'course3'},
];

app.get('/', (req,res) => {
    res.send('Hello World');
});


app.get('/api/courses', (req,res) => {
    res.send(courses);
});


app.get('/api/courses/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) {
        res.status(404).send('No course with given ID was found');
        return;
    }
    else res.send(course);
});

// GET Request
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
});

// POST Request
app.post('/api/courses', (req, res) => {
    if(!req.body.course || req.body.course.length < 3){
        // 400 Bad Request
        res.status(400).send("Name of course should not be empty and should be minimum of 3 characters");
        return;
    }
    
    const course = {
        id: courses.length + 1,
        course: req.body.course
    };
    courses.push(course);
    res.send(course);
})


// PUT Request
app.put('/api/courses/:id', (req, res) => {
    // Find course
    // if not existing, return 404 error
    var course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) {
        res.status(404).send('No course with given ID was found');
        return;
    }
   
   
    // Validate new course
    if(!req.body.course || req.body.course.length < 3){
        // 400 Bad Request
        res.status(400).send("Name of course should not be empty and should be minimum of 3 characters");
        return;
    }

    // Replace found course with new course
    course.course = req.body.course
    res.send(course)
});

// DELETE Request
app.delete('/api/courses/:id', (req,res)=>{
    // Find course
    // if not existing, return 404 error
    var course = courses.find(c => c.id === parseInt(req.params.id));
    debugger;
    if(!course) {
        res.status(404).send('No course with given ID was found');
        return;
    }
    
    // Get the index of the course we're looking for (to delete)
    const index = courses.indexOf(course);
    
    // Delete this course
    courses.splice(index,1);

    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> { console.log(`Listening on port number ${port}`)});
