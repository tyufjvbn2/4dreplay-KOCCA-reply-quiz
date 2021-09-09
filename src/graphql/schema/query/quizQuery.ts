export const quizQuery = `
  test2: String
  quizList(content_id: objectId, first: Int, offset: Int): [Quiz]
  quizByVod(vod_id: objectId): [Quiz]
  quizOne: Quiz
`;
