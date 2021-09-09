export const quizTypes = `

    enum EventState {
        PREPARING
        ONPROGRESS
        TERMINATED
    }

    type Quiz {
        _id: objectId
        vod_id: objectId
        event_state: EventState
        event_title: String
        event_text: String
        select_options: [String]
        created_at: Date
        updated_at: Date
    }

`;
