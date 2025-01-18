import express from "express";
import { engine } from "express-handlebars";
import { fetchAPI, fetchMovie } from "./static/Script/fetch.js";
import { showSoloMovie } from "./static/Script/moviecard-solo.js";
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", async (req, res) => {

    const movies = await fetchAPI();
    res.render("home", { movies, isHomePage: true } );
})


app.get("/movies/:movieId", async (req, res) => {
    try {    
        const movie = await fetchMovie(req.params.movieId)
        const { movieContent, returnButtonContent } = await showSoloMovie(movie);
        res.render("movie", { movie, returnButtonContent, isHomePage: true });

    } catch (error) {
        console.error("Error fetching movie:", error);
        res.status(500).send("Error fetching movie data");
    }
});

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/assets', express.static(path.join(__dirname, 'static', 'assets' )));
app.use('/movies/static', express.static(path.join(__dirname, 'static')));
app.use('/movies/assets', express.static(path.join(__dirname, 'static', 'assets' )));



app.listen(5080);