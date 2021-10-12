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

	quizList: async (arg: QuizParams) => {
		const { first, offset } = arg;
		return await Quiz.find(
			arg.content_id && {
				content_id: arg.content_id,
			}
		)
			.sort({ field: "asc", _id: 1 })
			.skip(first)
			.limit(offset);
	},

	quizByVod: async (vod_id: mongoose.Types.ObjectId) => {
		return await Quiz.findById(vod_id);
	},

	quizOne: async (_id: mongoose.Types.ObjectId) => {
		return await Quiz.findById(_id);
	},

	totalQuizTest: async (arg: QuizParams) => {
		// return await Quiz.aggregate([
		// 	{ $match: { event_state: "ONPROGRESS" } },

		// 	arg.content_id && {
		// 		content_id: arg.content_id,
		// 	},
		// 	arg.vod_id && {
		// 		vod_id: arg.vod_id,
		// 	},
		// ]);
		return await Quiz.find(
			arg.content_id && {
				content_id: arg.content_id,
			},
			arg.vod_id && {
				vod_id: arg.vod_id,
			}
		);
	},

	//-----------------//
	// Mutation Method //
	//-----------------//

	createQuiz: async (arg: QuizParams) => {
		const {
			content_id,
			vod_id,
			event_title,
			event_text,
			select_options,
			event_start,
			event_end,
			event_winning_publication,
			event_policy_text,
		} = arg;
		const newQuiz = await Quiz.create({
			content_id: content_id,
			vod_id: vod_id,
			event_state: "PREPARING",
			event_title: event_title,
			event_text: event_text,
			select_options: select_options,
			event_start: event_start,
			event_end: event_end,
			event_winning_publication: event_winning_publication,
			event_policy_text: event_policy_text,
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
				event_start: arg.event_start
					? arg.event_start
					: original.event_start,
				event_end: arg.event_end ? arg.event_end : original.event_end,
				event_winning_publication: arg.event_winning_publication
					? arg.event_winning_publication
					: original.event_winning_publication,
				event_policy_text: arg.event_policy_text
					? arg.event_policy_text
					: original.event_policy_text,
				updated_at: new Date(),
			},
			{ returnOriginal: false }
		);
		console.log("update", updatedQuiz);
		return updatedQuiz;
	},

	deleteQuiz: async (_id: mongoose.Types.ObjectId) => {
		const target = await Quiz.findOneAndDelete(_id);
		console.log("target", target);
		return target;
	},
};
