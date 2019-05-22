
import React from 'react';

class ToolbarButton extends React.Component {

  constructor(props) {
    super(props);
    this.toggleActiveClass = this.toggleActiveClass.bind(this);
    this.state = {
      active: false
    };
  }

  toggleActiveClass() {
    this.setState((prevState) => {
      return {
        active: !prevState.active
      };
    });
  }

  render() {
    return (
      <div>
        <button 
          className={`ql-${this.props.format[0]} ${this.state.active ? 'ql-active' : ''}`}
          value={this.props.format[1] ? this.props.format[1] : 'null'}
          key={this.props.format[1] ? this.props.format[1] : this.props.format[0]}
          onClick={this.toggleActiveClass}>
            {this.props.format[0]}
        </button>
      </div>
    );
  }
}

export default ToolbarButton;
