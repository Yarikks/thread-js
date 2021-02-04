import { Router } from 'express';
import * as postService from '../services/postService';

const router = Router();

router
  .get('/', (req, res, next) => postService.getPosts(req.query)
    .then(posts => res.send(posts))
    .catch(next))
  .get('/:id', (req, res, next) => postService.getPostById(req.params.id)
    .then(post => res.send(post))
    .catch(next))
  .get('/userReactions/:id', (req, res, next) => postService.getUserReactions(req.params.id)
    .then(reactions => res.send(reactions))
    .catch(next))
  .put('/', (req, res, next) => postService.updatePost(req.body)
    .then(post => res.send(post))
    .catch(next))
  .post('/', (req, res, next) => postService.create(req.user.id, req.body)
    .then(post => {
      req.io.emit('new_post', post); // notify all users that a new post was created
      return res.send(post);
    })
    .catch(next))
  .put('/react', (req, res, next) => postService.setReaction(req.user.id, req.body)
    .then(reaction => {
      if (reaction.post && (reaction.post.userId !== req.user.id)) {
        if (reaction.isLike) {
          req.io.to(reaction.post.userId).emit('like');
        } else {
          req.io.to(reaction.post.userId).emit('dislike');
        }
      }
      return res.send(reaction);
    })
    .catch(next));

export default router;
