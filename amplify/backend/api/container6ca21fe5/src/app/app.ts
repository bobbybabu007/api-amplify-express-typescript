import express from 'express';

const app = express();

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();
});

app.get('/',(req,res) => 
{
    res.send('Hello World from inside a container');
});

app.get('/admin',(req,res) => 
{
    res.send('This is the admin in the admin space');
});

app.listen(4000, () => {
    console.log('listening on port 4000')
})
