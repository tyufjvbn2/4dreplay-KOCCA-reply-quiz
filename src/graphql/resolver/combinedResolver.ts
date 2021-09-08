import {replyResolver} from "./replyResolver"

export const resolver = {

  test2: () => {
    return "This come from test2!!"
  },
  ...replyResolver


};
