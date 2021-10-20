import mongoose from "mongoose";
const QuizUser = require("../../../models/collections/quiz_user");
const QuizUserData = require("../../../models/collections/quiz_user_data");
const ObjectId = mongoose.Types.ObjectId;

import { QuizUserParams } from "../interfaces/quizUserInterface";

//퀴즈의 항목을 유저가 선택하면 그 값을 데이터에 찍는 부분

export const quizUserResolver = {
	//--------------//
	// Query Method //
	//--------------//

	test4: () => {
		return "This will use for quiz user resolver";
	},

	quizUserList: async () => {
		const target = await QuizUser.distinct("user_id"); // 지정된 키값을 중복제거하여 가져옴
		console.log("target", target);
		return target;
	},

	//-----------------//
	// Mutation Method //
	//-----------------//

	selectQuizOption: async (arg: QuizUserParams) => {
		const { quiz_id, user_id, option } = arg;
		const newData = await QuizUser.findOneAndUpdate(
			{ user_id: user_id, quiz_id: quiz_id },
			{
				quiz_id: quiz_id,
				user_id: user_id,
				option: option,
			},
			{ upsert: true, returnOriginal: false }
		);
		console.log("user select option", newData);

		const totalCount = await QuizUser.count({
			quiz_id: new ObjectId(quiz_id),
		});

		console.log("total?", totalCount);

		const totalResult = await QuizUser.aggregate([
			{ $match: { quiz_id: new ObjectId(quiz_id) } },
			{ $group: { _id: "$option", count: { $sum: 1 } } },
			{
				$project: {
					count: 1,
					percentage: {
						$concat: [
							{
								$substr: [
									{
										$multiply: [
											{
												$divide: [
													"$count",
													{ $literal: totalCount },
												],
											},
											100,
										],
									},
									0,
									2,
								],
							},
							"",
							"%",
						],
					},
				},
			},
			// {
			// 	$bucket: {
			// 		groupBy: "$option",
			// 		boundaries: [0, 1, 2, 3],
			// 		default: "others",
			// 		output: {
			// 			count: { $sum: 1 },
			// 		},
			// 	},
			// },
		]);

		console.log("group count well?", totalResult);

		return totalResult;
	},

	addQuizParticipantData: async (arg: QuizUserParams) => {
		const { quiz_id, user_id, name, phone_number } = arg;
		const newData = await QuizUserData.create({
			quiz_id: quiz_id,
			user_id: user_id,
			name: name,
			phone_number: phone_number,
		});
		console.log("new personal data", newData);
	},
};
