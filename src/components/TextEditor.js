import React from 'react';
import { EditorState, RichUtils } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import Toolbar from './Toolbar';

import createHighlightPlugin from './plugins/highlightPlugin';
import createCheckableListPlugin from 'draft-js-checkable-list-plugin';

const highlightPlugin = createHighlightPlugin();
const checkableListPlugin = createCheckableListPlugin();

class TextEditor extends React.Component {

  constructor(props) {
    super(props);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);

    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = editorState => { this.setState({editorState}); };
    this.setDomEditorRef = ref => this.domEditor = ref;

    this.plugins = [highlightPlugin, checkableListPlugin];
  }

  componentDidMount() {
    this.domEditor.focus();
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(
      this.state.editorState,
      command
    );
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState, blockType
      )
    );
  }

  toggleInlineStyle(style) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState, style
      )
    );
  }

  render() {

    return (
      <div id="editor-container">

        <Toolbar
            editorState={this.state.editorState} 
            toggleBlockType={this.toggleBlockType}
            toggleInlineStyle={this.toggleInlineStyle}
            checklist={checkableListPlugin}
          />
        
        <Editor 
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            plugins={this.plugins}
            ref={this.setDomEditorRef}
          />
          
      </div>
    );
  }
}

export default TextEditor;