
import React from 'react';
import ToolbarButton from './ToolbarButton';

class Toolbar extends React.Component {

  render() {

    const headings = [
      ['null', 'Body'], 
      ['large', 'Heading'], 
      ['huge', 'Title']
    ];
    
    const formats = 
    [
      ['bold'], ['italic'], ['underline'], ['background', '#ffbf88'],
      ['list', 'ordered'], ['list', 'bullet'], ['list', 'check'],
      ['blockquote'], ['link'], ['image'], 
      ['ql-direction', 'rtl'], ['code'], ['code-block'], ['formula'],
    ];
    
    return (
      <div>
        <div id="toolbar">
          <span className="ql-formats">

            <select className="ql-header" name="Normal">
              <option value="1">Title</option>
              <option value="2">Heading</option>
              <option value="null">Normal</option>
            </select>

            {
              formats.map((format) => 
                <ToolbarButton format={format}/>
              )
            } 

          </span>
       </div>
      </div>
    );
  }
}

export default Toolbar;
