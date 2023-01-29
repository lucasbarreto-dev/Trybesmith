import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const validate = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export default validate;
