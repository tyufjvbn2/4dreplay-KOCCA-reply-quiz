// import mongoose from "mongoose";
const Quiz = require("../../../models/collections/quiz");

export const quizResolver = {
	//--------------//
	// Query Method //
	//--------------//

	test2: () => {
		return "This come from test2!!";
	},

	quizList: async () => {
		return await Quiz.find();
	},

	//-----------------//
	// Mutation Method //
	//-----------------//
};
