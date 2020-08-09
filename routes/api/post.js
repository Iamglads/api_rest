// routes 

const express = require('express');
const router = express.Router();
const log = console.log;

// post model 
const Post = require('../../models/post');

// get all post 
router.get('/', (req, res) => {
    Post.find()
    .then((post) => res.status(201).json(post))
    .catch(err => log(err))
})
// route for POST api/post
router.post('/', (req, res) => {
    const newPost = new Post(req.body)
    newPost.save()
    .then(() => { log('Post crée avec succès')})
    .catch(err => log(err));
});

// delete 
router.delete('/', (req, res) => {
    Post.deleteOne(req.params.id)
    .then(() => res.status(201).json( { Message: 'Supprimé avec succès'}))
    .catch( err => log(err))
})

// update 
router.put('/', (req, res) => {
    Post.updateOne(req.params.id, req.body)
    .then(() => res.status(201).json( req.body))
    .catch( err => log(err))
})

module.exports = router;