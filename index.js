import express from "express";
import { engine } from "express-handlebars";
import { fetchAPI, fetchMovie } from "./static/Script/fetch.js";
const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", async (req, res) => {

    const movies = await fetchAPI();
    res.render("home", { movies } );
})

app.get("/movies/:movieId", async (req, res) => {
    try {    
        const movie = await fetchMovie(req.params.movieId)
        res.render("movie", { movie });

    } catch (error) {
        console.error("Error fetching movie:", error);
        res.status(500).send("Error fetching movie data");
    }
});

app.use('/static', express.static("./static"));
app.use('/static', express.static("./static/assets"));
app.use('/movies/static/assets', express.static("./static/assets"));

app.listen(5080);