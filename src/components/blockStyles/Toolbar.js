import React from 'react';
import HeaderStyleDropdown from './HeaderStyleDropdown';
import BlockStyleButton from './BlockStyleButton';

export const blockTypes = [
  { label: " “ ” ", style: "blockquote" },
  { label: "UL", style: "unordered-list-item" },
  { label: "OL", style: "ordered-list-item" },
  { label: "{ }", style: 'code-block' },
  { label: "B", style: 'BOLD'}
];

export const headings = [
  { label: "H1", style: "header-one" },
  { label: "H2", style: "header-two" },
  { label: "H3", style: "header-three" },
  { label: "H4", style: "header-four" },
  { label: "H5", style: "header-five" },
  { label: "H6", style: "header-six" }
];

export const getBlockStyle = block => {
  switch (block.getType()) {
    case "blockquote":
     return "RichEditor-blockquote";
    default:
     return null;
   }
};

class Toolbar extends React.Component {

  render() {
    const editorState = this.props.editorState;
    const selection = editorState.getSelection();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

    return (
      <div>
        <span className="toolbar">

          <HeaderStyleDropdown
            headerOptions={headings}
            active={blockType}
            onToggle={this.props.onToggle}
          />

          {
            blockTypes.map(type => {
              return (
                <BlockStyleButton 
                  active={type.stype === blockType}
                  label={type.label}
                  onToggle={this.props.onToggle}
                  style={type.style}
                  key={type.label}
                  type={type}
                />
              );
              
            })
          }

        </span>
      </div>
    );
  }
}

export default Toolbar;
