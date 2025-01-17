import express from "express";
import { engine } from "express-handlebars";
import { fetchAPI, fetchMovie } from "./static/Script/fetch.js";
import { showSoloMovie } from "./static/Script/moviecard-solo.js";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", async (req, res) => {

    const movies = await fetchAPI();
    res.render("home", { movies, isHomePage: true } );
})

app.get("movies/:movieId", async (req, res) => {
    try {    
        const movie = await fetchMovie(req.params.movieId)
        const { movieContent, returnButtonContent } = await showSoloMovie(movie);
        res.render("movie", { movieContent, returnButtonContent, isHomePage: true });
    } catch (error) {
        console.error("Error fetching movie:", error);
        res.status(500).send("Errpr fetching movie data");
    }
});

app.use('/static', express.static('./static/'));
app.use('/assets', express.static('./static/assets'));

app.listen(5080);