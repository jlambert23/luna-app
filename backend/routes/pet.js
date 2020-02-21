import express from 'express';
import Pet from '../models/pet';
import FindPetById from '../middleware/pet';

const petRouter = express.Router();

petRouter.route('/')
  .get((_, res) => {    
    Pet.find({}, (err, pets) => err
      ? res.status(500).send(err)
      : res.json(pets));
  })
  .post((req, res) => {
    const pet = new Pet(req.body);
    pet.save();
    res.status(201).send(pet);
  });

petRouter.use('/:petId', FindPetById);
petRouter.route('/:petId')
  .get(({ pet }, res) => res.json(pet))
  .put(({ pet, body }, res) => {
      pet.name = body.name;
      pet.save();
      res.json(pet);
  })
  .patch(({ pet, body }, res) => {
    if(body._id) { delete body._id; }
    Object.assign(pet, body);
    pet.save();
    res.json(pet);
  })
  .delete(({ pet }, res) => pet.remove(err => err
    ? res.status(500).send(err)
    : res.status(204).send('success'))
  );

petRouter.use('/:petId', FindPetById);
petRouter.route('/:petId/poops')
  .post(({ pet, body }, res) => {
    if (typeof(body) !== Date) { body = new Date(); }
    pet.poops.push(body);
    pet.save();
    res.json(pet);
  })
  .delete(({ pet }, res) => {
    pet.poops = [];
    pet.save();
    res.json(pet);
  });

export default petRouter;
