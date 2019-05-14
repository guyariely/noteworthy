import { RichUtils } from "draft-js";

export default () => {
	return {
		customStyleMap: {
			HIGHLIGHT: {
				background: "orange",
				color: "white"
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


