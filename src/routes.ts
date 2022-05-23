import { Router } from 'express';
import { NodemailerMailAdapter } from './nodemailer/nodemailer-mail-adapter';
import { PrimaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = Router()



routes.post('/feedbacks', async (req, res) => {
  const {comment, type, screenshot} = req.body
  
  const prismaFeedbacksRepository = new PrimaFeedbacksRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailAdapter)

  await submitFeedbackUseCase.execute({
    comment,
    type, 
    screenshot
    
  })


  

  return res.status(201).send()
})

