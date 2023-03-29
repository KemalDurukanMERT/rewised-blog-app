import { SET_EDITOR } from "../types/editorTypes";

export function setEditor(document) {
    return {
      type: SET_EDITOR,
      payload: {
        document: document,
      },
    };
  }