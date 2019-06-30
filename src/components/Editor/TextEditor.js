import React from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
import Toolbar from './Toolbar';
import QuickAccess from './QuickAccess';
import { styleMap } from './InlineStyles';

const {hasCommandModifier} = KeyBindingUtil;

const myKeyBindingFn = e => {
  
  if (hasCommandModifier(e)) {
    switch(e.keyCode) {
      case 72 /* H */:
        return 'HIGHLIGHT';
      case 89 /* Y */:
        return 'CODE';
      case 83 /* S */: 
        return 'STRIKETHROUGH';
    }
  }
  else if (e.nativeEvent.altKey) {
    switch (e.keyCode) {
      case 84: 
        return 'header-one';
      case 72:
        return 'header-two';
    }
  }
  return getDefaultKeyBinding(e);
};

class TextEditor extends React.Component {

  constructor(props) {
    super(props);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.toggleBlockType = this.toggleBlockType.bind(this);
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
    this.newNote = this.newNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);

    const welcomeNote_JSONstring = JSON.stringify({"blocks":[{"key":"9tik9","text":"Noteworthy 📝","type":"header-one","depth":0,"inlineStyleRanges":[{"offset":0,"length":12,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"99hbq","text":"An editor worthy of your notes.","type":"header-two","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1fs3p","text":" Writing, more than any other art, is indexed to the worthiness of the self because it is identified in people's minds with emotion.","type":"blockquote","depth":0,"inlineStyleRanges":[{"offset":53,"length":11,"style":"ITALIC"}],"entityRanges":[],"data":{}},{"key":"fjcm0","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"a38to","text":"Writing notes should be a minimal, yet powerful experience.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":59,"style":"HIGHLIGHT"}],"entityRanges":[],"data":{}},{"key":"siu","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5jo3s","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"9vkn4","text":"👉 A few things Noteworthy is capable of:","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":2,"length":38,"style":"ITALIC"}],"entityRanges":[],"data":{}},{"key":"ev32c","text":"Different headings (Title, Heading, Body).","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6nun7","text":"Inline styles such as bold, italic, underline, highlight and code.","type":"unordered-list-item","depth":0,"inlineStyleRanges":[{"offset":22,"length":4,"style":"BOLD"},{"offset":28,"length":6,"style":"ITALIC"},{"offset":36,"length":9,"style":"UNDERLINE"},{"offset":47,"length":10,"style":"HIGHLIGHT"},{"offset":61,"length":4,"style":"CODE"}],"entityRanges":[],"data":{}},{"key":"31dou","text":"Lists, including unordered & ordered lists, and even a checklist.","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5b657","text":"Quotes and codeblocks.","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"frafm","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"bjr8","text":"Writing notes with Noteworthy is a very clean experience, which allows a distractions free enviorment.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":40,"length":6,"style":"BOLD"},{"offset":73,"length":17,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"736r8","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"atj88","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8djjp","text":"✅ to do ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":2,"length":5,"style":"BOLD"},{"offset":2,"length":5,"style":"UNDERLINE"}],"entityRanges":[],"data":{}},{"key":"2t526","text":"make a rich text editor","type":"checkable-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"checked":true}},{"key":"79h79","text":"develope a file system","type":"checkable-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"checked":false}},{"key":"d72vf","text":"learn back-end development ","type":"checkable-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"checked":false}},{"key":"euklm","text":"persist notes to the cloud","type":"checkable-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"549va","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"2gmtp","text":"👩‍💻 here's some example code ","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":24,"style":"BOLD"},{"offset":24,"length":5,"style":"CODE"}],"entityRanges":[],"data":{}},{"key":"8trm5","text":" ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"f2u4h","text":"toggleBlockType(blockType) {\n    this.onChange(\n RichUtils.toggleBlockType(\n        this.state.editorState, blockType\n      )\n    );\n  }","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1fv19","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3hvrv","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"fhg86","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"1bgk3","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"39qol","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"djld","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}});

    this.state = { };
  
    if (!window.localStorage.key(0)) {
      localStorage.setItem('welcome', welcomeNote_JSONstring);
      this.state.activeNote = 'welcome';
      this.state.editorState = EditorState.createWithContent(
        convertFromRaw(JSON.parse(
          welcomeNote_JSONstring)
        )
      );
    } 
    else {
      this.state.activeNote = window.localStorage.key(0);
      this.state.editorState = EditorState.createWithContent(
        convertFromRaw(JSON.parse(
          window.localStorage.getItem(this.state.activeNote))
        )
      );
    }
 
    this.onChange = editorState => { 
      const contentState = editorState.getCurrentContent();
      this.saveNote(contentState);
      this.setState({editorState});       
    };

    this.setDomEditorRef = ref => this.domEditor = ref;
  }
  
  saveNote(note) {    
    window.localStorage.setItem(
      this.state.activeNote, 
      JSON.stringify(convertToRaw(note))
    );    
  }

  openNote(noteTitle) {
    this.setState({
      activeNote: noteTitle,
      editorState: EditorState.createWithContent(
        convertFromRaw(JSON.parse(window.localStorage.getItem(noteTitle)))
      )
    });
  } 

  newNote(noteTitle) {
    const editorState = EditorState.createEmpty().getCurrentContent();    
    window.localStorage.setItem(noteTitle, JSON.stringify(convertToRaw(editorState)));

    this.setState({
      activeNote: noteTitle,
      editorState: EditorState.createWithContent(
        convertFromRaw(JSON.parse(window.localStorage.getItem(noteTitle)))
      )
    });
  }

  deleteNote() {
    window.localStorage.removeItem(this.state.activeNote);
    const defaultNote = window.localStorage.key(0);
    this.setState({
      activeNote: defaultNote,
      editorState: EditorState.createWithContent(
        convertFromRaw(JSON.parse(window.localStorage.getItem(defaultNote)))
      )
    });
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
    else if (['HIGHLIGHT', 'CODE', 'STRIKETHROUGH'].includes(command)) {
      this.toggleInlineStyle(command);
      return 'handled';
    } 
    else if (['header-one', 'header-two'].includes(command)) { 
      this.toggleBlockType(command);
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
        />
        
        <main className="editor">
          <Editor 
            editorState={this.state.editorState}
            customStyleMap={styleMap}
            handleKeyCommand={this.handleKeyCommand}
            keyBindingFn={myKeyBindingFn}
            onChange={this.onChange}
            ref={this.setDomEditorRef}
          />
        </main>
          
          <QuickAccess 
            collapseSidebar={this.props.collapseSidebar}
            isCollapsed={this.props.isCollapsed}
            toggleThemesModal={this.props.toggleThemesModal}
            newNote={this.newNote}
            deleteNote={this.deleteNote}
          />
        
      </div>
    );
  }
}

export default TextEditor;