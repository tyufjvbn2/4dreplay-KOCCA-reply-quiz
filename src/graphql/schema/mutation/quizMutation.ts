export const quizMutation = `
  createQuiz(content_id: objectId, vod_id: objectId, event_id: objectId, quiz_title: String, quiz_text: String, select_options: [String], quiz_answer: Int): Quiz
  updateQuiz(_id: objectId, quiz_title: String, quiz_text: String, select_options: [String], quiz_answer: Int): Quiz
  deleteQuiz(_id: objectId): Quiz
`;
