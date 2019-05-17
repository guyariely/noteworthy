import { RichUtils } from "draft-js";

export default () => {
	return {
		customStyleMap: {
			HIGHLIGHT: {
				background: "rgb(255, 233, 221)"
			}
		},
		keyBindingFn: e => {
			if (e.ctrl && e.key === "h") {
				return "highlight";
			}
		},
		handleKeyCommand: (command, editorState, { setEditorState }) => {
			if (command === "highlight") {
				setEditorState(RichUtils.toggleInlineStyle(editorState, "HIGHLIGHT"));
				return true;
			}
		}
	};
};


