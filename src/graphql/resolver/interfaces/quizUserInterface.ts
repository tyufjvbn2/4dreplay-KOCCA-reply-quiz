import mongoose from "mongoose";

export interface QuizUserParams {
	_id?: mongoose.Types.ObjectId;
	quiz_id?: mongoose.Types.ObjectId;
	user_id?: mongoose.Types.ObjectId;
	option?: number;
	name?: string;
	phone_number?: number;
}
