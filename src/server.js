const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

app.use(cors());

const list1 = {
    items: [{
        name: 'tomato',
        num: 4
    },
    {
        name: 'banana',
        num: 10
    },
    {
        name: 'apple',
        num: 2
    }]
};

const list2 = {
    items: [{
        name: 'tomato',
        num: 4
    },
    {
        name: 'banana',
        num: 10
    },
    {
        name: 'apple',
        num: 2
    }]
};


app.get('/list1', (req, res) => {
    res.send(JSON.stringify(list1));
});

app.get('/list2', (req, res) => {
    res.send(JSON.stringify(list2));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))