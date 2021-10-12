import mongoose from "mongoose";
const Event = require("../../../models/collections/event");

import { EventParams } from "../interfaces/eventInterface";

export const eventResolver = {
	//--------------//
	// Query Method //
	//--------------//

	test5: () => {
		return "This come from event test";
	},

	eventList: async (arg: EventParams) => {
		const { first, offset } = arg;
		return await Event.find()
			.sort({ field: "asc", _id: 1 })
			.skip(first)
			.limit(offset);
	},

	eventOne: async (_id: mongoose.Types.ObjectId) => {
		return await Event.findById(_id);
	},

	//-----------------//
	// Mutation Method //
	//-----------------//

	createEvent: async (arg: EventParams) => {
		const {
			content_id,
			vod_id,
			event_title,
			event_text,
			event_start,
			event_end,
			event_winning_publication,
			event_policy_text,
		} = arg;
		const newEvent = await Event.create({
			content_id: content_id,
			vod_id: vod_id,
			select_options: "PREPARING",
			event_title: event_title,
			event_text: event_text,
			event_start: event_start,
			event_end: event_end,
			event_winning_publication: event_winning_publication,
			event_policy_text: event_policy_text,
			event_child: [],
			created_at: new Date(),
			updated_at: new Date(),
		});
		console.log("created", newEvent);
		return newEvent;
	},

	updateEvent: async (arg: EventParams) => {
		const { _id } = arg;
		const original = await Event.findOne({ _id: _id });
		console.log("original", original);
		const updatedEvent = await Event.findOneAndUpdate(
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
		console.log("update", updatedEvent);
		return updatedEvent;
	},

	deleteEvent: async (_id: mongoose.Types.ObjectId) => {
		const target = await Event.findOneAndDelete(_id);
		console.log("target", target);
		return target;
	},
};
