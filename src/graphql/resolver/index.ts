import { replyResolver } from "./resolvers/replyResolver";
import { quizResolver } from "./resolvers/quizResolver";
import { noticeResolver } from "./resolvers/noticeResolver";

export const resolver = {
	...replyResolver,
	...quizResolver,
	...noticeResolver,
};
