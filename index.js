import express from "express";
import { engine } from "express-handlebars";
import { fetchAPI, fetchMovie } from "./static/Script/fetch.js";
import { showSoloMovie } from "./static/Script/moviecard-solo.js";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get('/', async (req, res) => {

    try {
        const movie = await fetchMovie(req.params.id);
        const movieContent = await showSoloMovie(movie);
        req.render("movie", { movieContent });
    } catch (error) {
        res.render("404", { message: "Couldn't fetch movies"});
    }
})

app.use('/static', express.static('./static/'));
app.use('/assets', express.static('./static/assets'));

app.listen(5080);