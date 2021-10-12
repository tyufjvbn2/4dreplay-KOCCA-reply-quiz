export const eventMutation = `
  createEvent(content_id: objectId, vod_id: objectId, event_title: String, event_text: String, event_start: Date, event_end: Date, event_winning_publication: Date, event_policy_text: String): Event
  updateEvent(_id: objectId, event_state: EventState, event_title: String, event_text: String, event_start: Date, event_end: Date, event_winning_publication: Date, event_policy_text: String]): Event
  deleteEvent(_id: objectId): Event
`;
