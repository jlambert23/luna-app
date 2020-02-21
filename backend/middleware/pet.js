import Pet from '../models/pet';

export default function(req, res, next) {
  Pet.findById(req.params.petId, (err, pet) => {
    if (err) { 
      res.status(500).send(err);
    } else { 
      if (pet.lastPoop) { pet.lastPoop = undefined; }
      req.pet = pet;
      next();
    }
  });
}
