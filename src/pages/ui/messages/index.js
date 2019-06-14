import React, { Component } from "react";
import { Card, Button, message } from "antd";
import "./index.less";

export default class Messages extends Component {
  showMessage = type => {
    message[type]("恭喜恭喜恭喜你呀");
  };

  render() {
    return (
      <div className="demo-wrapper">
        <Card title="全局提醒框">
          <Button type="primary" onClick={() => this.showMessage("success")}>
            success
          </Button>
          <Button type="primary" onClick={() => this.showMessage("info")}>
            Info
          </Button>
          <Button type="primary" onClick={() => this.showMessage("warning")}>
            Warning
          </Button>
          <Button type="primary" onClick={() => this.showMessage("error")}>
            Error
          </Button>
          <Button type="primary" onClick={() => this.showMessage("loading")}>
            Loading
          </Button>
        </Card>
      </div>
    );
  }
}
