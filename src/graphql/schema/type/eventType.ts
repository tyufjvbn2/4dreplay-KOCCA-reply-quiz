export const eventTypes = `
    
    enum EventState {
        PREPARING
        ONPROGRESS
        TERMINATED
    }

    type Event {
        _id: objectId
        content_id: objectId
        vod_id: objectId
        event_state: EventState
        event_title: String
        event_text: String
        event_start: Date
        event_end: Date
        event_winning_publication: Date
        event_policy_text: String
        event_child: [objectId]
        created_at: Date
        updated_at: Date
    }

`;
