export const quizTypes = `

    enum EventState {
        ONPROGRESS
        PARTICIPATED
        TERMINATED
    }

    type Quiz {
        _id: objectId
        vod_id: objectId
        event_state: EventState
        event_text: String
        created_at: Date
        updated_at: Date
    }

`;
