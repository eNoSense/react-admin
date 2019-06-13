import React, { Component } from "react";
import { Card, Button, Icon, Radio } from "antd";
import "./index.less";

export default class Buttons extends Component {
  state = {
    loading: false,
    size: "large"
  };

  handleCloseLoading = () => {
    this.setState({
      loading: false
    });
  };

  openLoading = () => {
    this.setState({
      loading: true
    });
  };

  handleChange = (e) => {
    this.setState({
      size: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">主要按钮</Button>
          <Button>普通按钮</Button>
          <Button type="dashed">虚线按钮</Button>
          <Button type="danger">危险按钮</Button>
          <Button disabled>禁用</Button>
        </Card>

        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search" />
          <Button type="primary" icon="search">
            搜索
          </Button>
          <Button type="primary" icon="download">
            下载
          </Button>
        </Card>

        <Card title="Loading 按钮">
          <Button type="primary" loading={this.state.loading}>
            提交
          </Button>
          <Button
            type="primary"
            shape="circle"
            icon="search"
            loading={this.state.loading}
          />
          <Button onClick={this.openLoading}>点击加载</Button>
          <Button shape="circle" icon="search" loading={this.state.loading} />
          <Button onClick={this.handleCloseLoading}>关闭</Button>
        </Card>

        <Card title="按钮组">
          <Button.Group className="Group">
            <Button type="primary" icon="left">
              返回
            </Button>
            <Button type="primary">
              前进 <Icon type="right" />
            </Button>
          </Button.Group>
        </Card>

        <Card title="按钮尺寸">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="large">大</Radio>
            <Radio value="default">中</Radio>
            <Radio value="small">小</Radio>
          </Radio.Group>
          <hr/>
          <Button size={this.state.size} type="primary">
            主要按钮
          </Button>
          <Button size={this.state.size}>普通按钮</Button>
          <Button size={this.state.size} type="dashed">
            虚线按钮
          </Button>
          <Button size={this.state.size} type="danger">
            危险按钮
          </Button>
          <Button size={this.state.size} disabled>
            禁用
          </Button>
        </Card>
      </div>
    );
  }
}
