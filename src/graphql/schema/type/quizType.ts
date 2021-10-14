export const quizTypes = `

    type OptionResult {
        _id: Int
        count: Int
    }


    type Quiz {
        _id: objectId
        content_id: objectId
        vod_id: objectId
        quiz_title: String
        quiz_text: String
        select_options: [String]
        quiz_answer: Int
        created_at: Date
        updated_at: Date
    }

`;
