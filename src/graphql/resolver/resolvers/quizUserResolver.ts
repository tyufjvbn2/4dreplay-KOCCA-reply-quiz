// import mongoose from "mongoose";
const quizUser = require("../../../models/collections/quiz_user");

// import { noticeParams } from "../interfaces/noticeInterface";

//퀴즈의 항목을 유저가 선택하면 그 값을 데이터에 찍는 부분

export const quizUserResolver = {
	//--------------//
	// Query Method //
	//--------------//

	test4: () => {
		return "This will use for quiz user resolver";
	},

	quizUserList: async () => {
		const target = await quizUser.distinct("user_id");
		console.log("target", target);
		return target;
	},

	//-----------------//
	// Mutation Method //
	//-----------------//
};
