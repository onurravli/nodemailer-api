import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  user: Joi.string().email().required(),
  pass: Joi.string().required(),
  host: Joi.string().required(),
  port: Joi.number().required(),
  secure: Joi.boolean().default(false),
  to: Joi.alternatives(Joi.string().email().required(), Joi.array().required()),
  cc: Joi.alternatives(Joi.string().email().optional(), Joi.array().optional()),
  bcc: Joi.alternatives(
    Joi.string().email().optional(),
    Joi.array().optional(),
  ),
  subject: Joi.string().required(),
  html: Joi.any().required(),
});

const joi = {
  post: (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: {
          message: 'Invalid body.',
          detail: error.message,
        },
      });
    }
    return next();
  },
};

export { joi };
