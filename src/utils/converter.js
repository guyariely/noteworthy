import { EditorState, convertFromRaw, convertToRaw } from "draft-js";

const converter = {
  toContent: editorState => convertToRaw(editorState.getCurrentContent()),
  toEditorState: note => {
    return EditorState.createWithContent(convertFromRaw(note.content));
  },
  toText: note =>
    converter.toEditorState(note).getCurrentContent().getPlainText(),
  toActiveBlockType: editorState =>
    editorState
      .getCurrentContent()
      .getBlockForKey(editorState.getSelection().getStartKey())
      .getType(),
};

export { converter };
