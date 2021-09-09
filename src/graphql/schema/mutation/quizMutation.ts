export const quizMutation = `
  createQuiz(vod_id: objectId, event_title: String, event_text: String, select_options: [String]): Quiz
  updateQuiz(_id: objectId, event_state: EventState, event_title: String, event_text: String, select_options: [String]): Quiz

`;
