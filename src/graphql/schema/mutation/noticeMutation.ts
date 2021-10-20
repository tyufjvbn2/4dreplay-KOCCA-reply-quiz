export const noticeMutation = `
  createNotice(classification: Classification, notice_title:String, notice_text:String): Notice
  deleteNotice(_id:objectId): Notice
  updateNotice(_id:objectId, classification: Classification, notice_title: String, notice_text:String): Notice
`;
