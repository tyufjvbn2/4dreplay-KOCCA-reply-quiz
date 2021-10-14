export const quizUserQuery = `
  test4: String
  quizUserList(quiz_id: objectId): [objectId]
  selectQuizOption(quiz_id: objectId, user_id: objectId, option: Int): [OptionResult]
`;
