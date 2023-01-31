import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const schema = Joi.object({
  productsIds: Joi.array().items(Joi.number()).min(1).required(),
});

const validate = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  
  if (error && error.details[0].type === 'any.required') {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  if (error && error.details[0].type === 'array.base') {
    return res.status(422).json({ message: error.details[0].message });
  }
  next();
};

export default validate;
