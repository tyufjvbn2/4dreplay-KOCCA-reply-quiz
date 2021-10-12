export const quizTypes = `

    enum EventState {
        PREPARING
        ONPROGRESS
        TERMINATED
    }

    type Quiz {
        _id: objectId
        content_id: objectId
        vod_id: objectId
        event_state: EventState
        event_title: String
        event_text: String
        select_options: [String]
        event_start: Date
        event_end: Date
        event_winning_publication: Date
        event_policy_text: String
        created_at: Date
        updated_at: Date
    }

`;
