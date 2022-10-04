const express = require("express");
const PORT = process.env.PORT || 3001;
const path = require("path");
const publicPath = path.join(__dirname, '..', 'build');
const app = express();

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});