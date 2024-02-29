import { Router } from 'express';
import { MailController } from '../controllers';
import { joi } from '../middlewares';

const mailRouter: Router = Router();
const mailController: MailController = new MailController();

mailRouter.post('/', joi.post, mailController.post);

export { mailRouter };
