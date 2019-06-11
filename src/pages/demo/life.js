import React, { Component } from "react";
import { Button } from 'antd';
import Child from "./child";
import 'antd/dist/antd.css'
import "./index.less"

export default class Life extends Component {
  constructor(props) {
    super(props);
    this.state = { count: -1 };
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    var style = {
      padding: 10
    };
    return (
      <div style={style} className="container">
        <p>React 生命周期介绍</p>
        <Button onClick={this.handleAdd}>antD点击一下</Button>
        <button onClick={this.handleClick.bind(this)}>点击一下</button>
        <p>{this.state.count}</p>
        <Child name={`gua${this.state.count}`} />
      </div>
    );
  }
}
