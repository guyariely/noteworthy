
import React from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import CodeNode from './CodeNode';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.',
              },
            ],
          },
        ],
      },
    ],
  },
})

const BoldMark = props => {
  return <strong>{props.children}</strong>
};

class Slate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: initialValue
    };
  }

  onChange = ({ value }) => {
    this.setState({ value });
  }

  onKeyDown = (event, editor, next) => {
    if (!event.ctrlKey) return next();

    switch (event.key) {

      case '`': {
        console.log("code");
        event.preventDefault();
        const isCode = editor.value.blocks.some(block => block.type === 'code');
        editor.setBlocks(isCode ? 'paragraph' : 'code');
        break;
      }

      case 'b': {
        console.log("bold");
        event.preventDefault();
        editor.toggleMark('bold');
        break;
      }

      default: {
        return next();
      }
    }
  }
  
  render() {

    return (
      <div>
        <Editor 
          value={this.state.value} 
          onChange={this.onChange} 
          onKeyDown={this.onKeyDown}
          renderNode={this.renderNode}
          renderMark={this.renderMark}
        />
      </div>
    );
  } 

  renderNode = (props, editor, next) => {
    switch (props.node.type) {
      case 'code':
        return <CodeNode {...props} />
      default:
        return next();
    }
  }
}

export default Slate;


