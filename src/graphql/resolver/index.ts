import { replyResolver } from "./resolvers/replyResolver";
import { quizResolver } from "./resolvers/quizResolver";
import { noticeResolver } from "./resolvers/noticeResolver";
import { quizUserResolver } from "./resolvers/quizUserResolver";
import { policyResolver } from "./resolvers/policyResolver";

export const resolver = {
	...replyResolver,
	...quizResolver,
	...noticeResolver,
	...quizUserResolver,
	...policyResolver,
};
