import { replyResolver } from "./resolvers/replyResolver";
import { quizResolver } from "./resolvers/quizResolver";
import { noticeResolver } from "./resolvers/noticeResolver";
import { quizUserResolver } from "./resolvers/quizUserResolver";

export const resolver = {
	...replyResolver,
	...quizResolver,
	...noticeResolver,
	...quizUserResolver,
};
