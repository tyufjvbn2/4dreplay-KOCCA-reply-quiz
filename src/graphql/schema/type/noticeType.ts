export const noticeTypes = `

    enum Classification {
        NOTICE
        EVENT
        GUIDE
        ALL
    }

    type Notice {
        _id: objectId
        classification: Classification
        notice_title: String
        notice_text: String
        created_at: Date
        updated_at: Date
    }

`;
