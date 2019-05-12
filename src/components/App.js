
import React from 'react';
import { EditorState, RichUtils } from 'draft-js';
import Editor from "draft-js-plugins-editor";
import createHighlightPlugin from './plugins/highlightPlugin';
import Toolbar from "./blockStyles/Toolbar";

const highlightPlugin = createHighlightPlugin();

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = editorState => {
      this.setState({editorState});
    };
    this.plugins = [
      highlightPlugin
    ];
  }

  toggleBlockType = blockType => {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  bold = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState, 'BOLD')
    );
  }

  italic = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState, 'ITALIC')
    );
  }

  underline = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState, 'UNDERLINE')
    );
  }

  highlight = () => {
    this.onChange( 
      RichUtils.toggleInlineStyle
      (this.state.editorState, 'HIGHLIGHT')
    );
  }

  render() {
    return (
      <div>
        <Toolbar
          editorState={this.state.editorState}
          onToggle={this.toggleBlockType}
        />
        <button onClick={this.bold}><strong>B</strong></button>
        <button onClick={this.italic}><em>I</em></button>
        <button onClick={this.underline}><u>U</u></button>
        <button onClick={this.highlight}><span style={{ background: "yellow" }}>H</span></button>

        <div id="editor-container">
          <Editor 
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            plugins={this.plugins}
          />
        </div>
      </div>
    );
  }
}

export default App;