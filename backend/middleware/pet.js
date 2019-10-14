import Pet from '../models/pet';

export default function(req, res, next) {
  Pet.findById(req.params.petId, (err, pet) => {
    if (err) { 
      res.status(500).send(err);
    } else { 
      req.pet = pet;
      next();
    }
  });
}
