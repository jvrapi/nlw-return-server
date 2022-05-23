import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedback-repository";

export class PrimaFeedbacksRepository implements FeedbacksRepository {
  

  async create ({comment, type, screenshot}: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        comment,
        type,
        screenshot
      }
    })
  }
}