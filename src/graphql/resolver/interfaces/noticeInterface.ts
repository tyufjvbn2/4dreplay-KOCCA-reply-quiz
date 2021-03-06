import mongoose from "mongoose";

enum Classification {
	NOTICE = "NOTICE",
	EVENT = "EVENT",
	GUIDE = "GUIDE",
	ALL = "ALL",
}

export interface noticeParams {
	_id?: mongoose.Types.ObjectId;
	classification?: Classification;
	notice_title?: string;
	notice_text?: string;
	first?: number;
	offset?: number;
	search_text?: string;
}
