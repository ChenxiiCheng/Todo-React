import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }

  //input框监听事件是为了获取到用户输入的内容
  //这里我们把AddTodo组件中的this.state.text和input.value绑定在一起了
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleClick = () => {
    this.props.addTodo(this.state.text);
    this.state.text = '';
  };
}

export default AddTodo;
