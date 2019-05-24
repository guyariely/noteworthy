import React from 'react';
import { EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import Toolbar from './Toolbar';
import Utilities from './Utilities';
import { styleMap } from './InlineStyles';

import createHighlightPlugin from '../plugins/highlightPlugin';
import createCheckableListPlugin from 'draft-js-checkable-list-plugin';

const highlightPlugin = createHighlightPlugin();
const checkableListPlugin = createCheckableListPlugin();

class TextEditor extends React.Component {

  constructor(props) {
    super(props);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);

    this.state = { 
      activeNote: ''
    };
    const activeNoteName = Object.keys(localStorage)[0]; 
    const defaultNote = window.localStorage.getItem(Object.keys(localStorage)[0]);

    if (defaultNote) {
      this.state.editorState = EditorState.createWithContent(
        convertFromRaw(JSON.parse(defaultNote))
      );
      this.setState({activeNote: activeNoteName});
    } else this.state.editorState = Editor.state.createEmpty();
 
    this.onChange = editorState => { 
      const contentState = editorState.getCurrentContent();
      this.saveNote(contentState);
      this.setState({editorState}); 
    };

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

  saveNote = note => {
    window.localStorage.setItem(this.state.activeNote, JSON.stringify(convertToRaw(note)));
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

        <main className="editor">
          <Editor 
              editorState={this.state.editorState}
              customStyleMap={styleMap}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}
              plugins={this.plugins}
              ref={this.setDomEditorRef}
            />
        </main>
          

          <Utilities 
            collapseSidebar={this.props.collapseSidebar}
            isCollapsed={this.props.isCollapsed}
          />
        
      </div>
    );
  }
}

export default TextEditor;