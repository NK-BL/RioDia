import { createEpicMiddleware } from "redux-observable";
import rootEpic from "../epics/_rootEpic.js";

export const epicMiddleware = createEpicMiddleware();

export const runMiddleware = middlware => {
  middlware.run(rootEpic);
};
