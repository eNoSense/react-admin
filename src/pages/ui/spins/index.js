import React, { Component } from "react";
import { Card, Button, Spin, Icon, Alert } from "antd";
import "./index.less";

export default class Modals extends Component {
  render() {
    const icon = <Icon type="plus" />;
    const iconLoading = <Icon type="loading" />;
    return (
      <div className="demo-wrapper">
        <Card title="Spin 基本用法">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />

          <Spin indicator={icon} />
        </Card>

        <Card title="内容遮罩">
          <Spin>
            <Alert
              message="瓜React"
              description="欢迎查看瓜Reacthhhhhh"
              type="info"
            />
            <Alert
              message="瓜React"
              description="欢迎查看瓜Reacthhhhhh"
              type="warning"
            />
          </Spin>

          <Spin tip="加载中" indicator={iconLoading}>
            <Alert
              message="瓜React"
              description="欢迎查看瓜Reacthhhhhh"
              type="info"
            />
            <Alert
              message="瓜React"
              description="欢迎查看瓜Reacthhhhhh"
              type="warning"
            />
          </Spin>
        </Card>
      </div>
    );
  }
}
