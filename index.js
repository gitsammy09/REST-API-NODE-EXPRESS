import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());


app.get('/', (req, res) => res.send('Hello from Homepage'));


app.listen(PORT, () => {
console.log(`Server is up and running on port: http://localhost:${PORT} my dawg`)
});