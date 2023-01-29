import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const schema = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const validate = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);

  if (error && error.details[0].type === 'any.required') {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  if (error) {
    return res.status(422).json({ message: error.details[0].message });
  }

  next();
};

export default validate;
