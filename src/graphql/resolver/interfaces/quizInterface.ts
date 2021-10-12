import mongoose from "mongoose";

enum EventState {
	PREPARING = "PREPARING",
	ONPROGRESS = "ONPROGRESS",
	TERMINATED = "TERMINATED",
}

export interface QuizParams {
	_id?: mongoose.Types.ObjectId;
	content_id?: mongoose.Types.ObjectId;
	vod_id?: mongoose.Types.ObjectId;
	event_state?: EventState;
	select_options?: [string];
	event_title?: string;
	event_text?: string;
	event_start?: Date;
	event_end?: Date;
	event_winning_publication?: Date;
	event_policy_text: string;
	first?: number;
	offset?: number;
}
