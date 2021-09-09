import mongoose from "mongoose";
const Quiz = require("../../../models/collections/quiz");

import { QuizParams } from "../interfaces/quizInterface";

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

	quizByVod: async (vod_id: mongoose.Types.ObjectId) => {
		return await Quiz.findById(vod_id);
	},

	quizOne: async (_id: mongoose.Types.ObjectId) => {
		return await Quiz.findBy;
	},

	//-----------------//
	// Mutation Method //
	//-----------------//

	createQuiz: async (arg: QuizParams) => {
		const { vod_id, event_title, event_text, select_options } = arg;
		const newQuiz = await Quiz.create({
			vod_id: vod_id,
			event_state: "PREPARING",
			event_title: event_title,
			event_text: event_text,
			select_options: select_options,
			created_at: new Date(),
			updated_at: new Date(),
		});
		console.log("created", newQuiz);
		return newQuiz;
	},

	updateQuiz: async (arg: QuizParams) => {
		const { _id } = arg;
		const original = await Quiz.findOne({ _id: _id });
		console.log("original", original);
		const updatedQuiz = await Quiz.findOneAndUpdate(
			{ _id: _id },
			{
				event_state: arg.event_state
					? arg.event_state
					: original.event_state,
				event_title: arg.event_title
					? arg.event_title
					: original.event_title,
				event_text: arg.event_text
					? arg.event_text
					: original.event_text,
				select_options: arg.select_options
					? arg.select_options
					: original.select_options,
				updated_at: new Date(),
			},
			{ returnOriginal: false }
		);
		console.log("update", updatedQuiz);
		return updatedQuiz;
	},
};
