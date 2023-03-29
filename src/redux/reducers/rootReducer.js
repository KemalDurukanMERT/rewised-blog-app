import { combineReducers } from "redux";
import authReducer from "./authReducer";
import langReducer from "./langReducer";
import markdownReducer from "./markdownReducer"
import editorReducer from "./editorReducer"

const rootreducer = combineReducers({
    auth: authReducer,
    lang: langReducer,
    markdownrdc: markdownReducer,
    editorrdc: editorReducer,
});

export default rootreducer