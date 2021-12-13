const express = require('express');

const Movie = require('../../../evalll/src/models/movie.model');


const authenticate = require("../../../evalll/src/middlewares/authentication");

const router = express.Router();

router.post('/', authenticate , async (req,res) => {
    try{

        //const user = req.user;
        const movie = await Movie.create({
            name:req.body.name,
            actors:req.body.actors,
            languages:req.body.languages,
            directors:req.body.directors,
            poster_url:req.body.poster_url,
            

        });
        return res.status(201).json({movie})

    }catch (e){
        return res.status(500).json({
            status: "Failed",
            message : e.message
        });
    };
});

router.get('/', async (req,res) => {
    try{
        const movie = await Movie.find().lean().exec();
        return res.send(movie)
    }catch(e){
        return res.status(500).json({
            status: "Failed",
            message : e.message
        });
    }
   
});

router.get('/actor', async (req,res) => {

    try{
        const movie = await Movie.find({"actors" : {$eq : actor }}).lean().exec();
        return res.send(movie)
    }catch(e){
        return res.status(500).json({
            status: "Failed",
            message : e.message
        });
    }
   
});
module.exports = router;