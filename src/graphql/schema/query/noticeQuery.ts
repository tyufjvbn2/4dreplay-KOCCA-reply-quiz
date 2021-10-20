export const noticeQuery = `
  test3: String
  noticeList(first:Int, offset:Int, classfication: Classification): [Notice]  
  noticeOne(_id: objectId): Notice
  noticeByClass(first:Int, offset:Int, classification: Classification): [Notice]
  noticeBySearch(first:Int, offset:Int, search_text: String, classification: Classification): ListResult
`;
