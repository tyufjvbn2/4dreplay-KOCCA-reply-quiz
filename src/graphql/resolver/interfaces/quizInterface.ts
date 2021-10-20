import mongoose from "mongoose";

export interface QuizParams {
	_id?: mongoose.Types.ObjectId;
	content_id?: mongoose.Types.ObjectId;
	vod_id?: mongoose.Types.ObjectId;
	event_id?: mongoose.Types.ObjectId;
	select_options?: [string];
	quiz_title?: string;
	quiz_text?: string;
	quiz_answer?: number;
	first?: number;
	offset?: number;
}
