import {SET_EDITOR} from "../types/editorTypes";
import ExampleDocument from "../../utils/ExampleDocument"

const initialState = {
  document: ExampleDocument,
};

//   JSON.parse(localStorage.getItem("blogs")) ? JSON.parse(localStorage.getItem("blogs")) :

const editorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_EDITOR:
      const { document } = payload;
      let newDocument = {
        ...state,
        document: document,
      };
      return newDocument;

    default:
      return state;
  }
};

export default editorReducer;
