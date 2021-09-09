export const quizMutation = `
  createQuiz(content_id: objectId, vod_id: objectId, event_title: String, event_text: String, select_options: [String]): Quiz
  updateQuiz(_id: objectId, event_state: EventState, event_title: String, event_text: String, select_options: [String]): Quiz
  deleteQuiz(_id: objectId): Quiz
`;
