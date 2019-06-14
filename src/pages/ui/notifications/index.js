import React, { Component } from "react";
import { Card, Button, notification, Icon, Radio } from "antd";
import "./index.less";

export default class Notifications extends Component {
  openNotification = (type, placement) => {
    if (placement) {
      notification.config({
        placement
      });
    }
    notification[type]({
      message: "发工资啦",
      description: "真的真的发工资啦"
    });
  };

  render() {
    return (
      <div className="demo-wrapper">
        <Card title="通知提醒框">
          <Button
            type="primary"
            onClick={() => this.openNotification("success")}
          >
            success
          </Button>
          <Button type="primary" onClick={() => this.openNotification("info")}>
            Info
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("warning")}
          >
            Warning
          </Button>
          <Button type="primary" onClick={() => this.openNotification("error")}>
            Error
          </Button>
        </Card>

        <Card title="通知提醒框">
          <Button
            type="primary"
            onClick={() => this.openNotification("success", "topRight")}
          >
            topRight success
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("info", "topLeft")}
          >
            topLeft Info
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("warning", "bottomLeft")}
          >
            bottomLeft Warning
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("error", "bottomRight")}
          >
            bottomRight Error
          </Button>
        </Card>
      </div>
    );
  }
}
