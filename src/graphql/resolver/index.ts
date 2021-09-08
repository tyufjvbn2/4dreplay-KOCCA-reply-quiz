import { replyResolver } from "./resolvers/replyResolver";
import { quizResolver } from "./resolvers/quizResolver";

export const resolver = {
	...replyResolver,
	...quizResolver,
};
