import mongoose from "mongoose";
const Quiz = require("../../../models/collections/quiz");
const Event = require("../../../models/collections/event");

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
			event_id,
			quiz_title,
			quiz_text,
			select_options,
			quiz_answer,
		} = arg;
		const newQuiz = await Quiz.create({
			content_id: content_id,
			vod_id: vod_id,
			event_id: event_id,
			quiz_title: quiz_title,
			quiz_text: quiz_text,
			select_options: select_options,
			quiz_answer: quiz_answer,
			created_at: new Date(),
			updated_at: new Date(),
		});

		console.log("created", newQuiz);
		const addingQuiz = await Event.updateOne(
			{ _id: event_id },
			{ $push: { event_child: newQuiz._id } }
		);
		console.log("update to event", addingQuiz);

		return newQuiz;
	},

	updateQuiz: async (arg: QuizParams) => {
		const { _id } = arg;
		const original = await Quiz.findOne({ _id: _id });
		console.log("original", original);
		const updatedQuiz = await Quiz.findOneAndUpdate(
			{ _id: _id },
			{
				quiz_title: arg.quiz_title
					? arg.quiz_title
					: original.quiz_title,
				quiz_text: arg.quiz_text ? arg.quiz_text : original.quiz_text,
				select_options: arg.select_options
					? arg.select_options
					: original.select_options,
				quiz_answer: arg.quiz_answer
					? arg.quiz_answer
					: original.quiz_answer,
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
