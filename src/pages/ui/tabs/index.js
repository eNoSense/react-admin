import React, { Component } from "react";
import { Card, message, Tabs, Icon } from "antd";
import "./index.less";

const { TabPane } = Tabs;

export default class TabsDemo extends Component {
  state = {};

  handleCallback = key => {
    message.info("hi, 您选择了页签: " + key);
  };

  handleChange = activeKey => {
    this.setState({ activeKey });
  };

  handleEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const panes = this.state.panes;
    const newKey = panes.length + 1
    const activeKey = `newTab${newKey}`;
    panes.push({
      title: "瓜打开了一个新tab",
      key: activeKey,
      content: "瓜打开了一的新tab的content"
    });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((panel, i) => {
      if (panel.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(panel => panel.key !== targetKey);

    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  };

  componentWillMount() {
    const panes = [
      {
        title: "Tab 1",
        content: "Tab1 content",
        key: "1"
      },
      {
        title: "Tab 2",
        content: "Tab2 content",
        key: "2"
      },
      {
        title: "Tab 3",
        content: "Tab3 content",
        key: "3"
      },
      {
        title: "Tab 4",
        content: "Tab4 content",
        key: "4"
      },
      {
        title: "Tab 5",
        content: "Tab5 content",
        key: "5"
      }
    ];
    this.setState({
      panes,
      activeKey: panes[0].key
    });
  }

  render() {
    const tab1 = (
      <span>
        <Icon type="plus" />
        新增
      </span>
    );

    const tab2 = (
      <span>
        <Icon type="edit" />
        编辑
      </span>
    );

    const tab3 = (
      <span>
        <Icon type="delete" />
        删除
      </span>
    );
    return (
      <div className="demo-wrapper">
        <Card title="Tab页签">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab="Tab 1" key="1" disabled>
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Card>

        <Card title="Tab带图的页签">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab={tab1} key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab={tab2} key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab={tab3} key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Card>

        <Card title="Tab带图的页签">
          <Tabs
            defaultActiveKey="1"
            activeKey={this.state.activeKey}
            onChange={this.handleChange}
            onEdit={this.handleEdit}
            type="editable-card"
          >
            {this.state.panes.map(panel => {
              return (
                <TabPane tab={panel.title} key={panel.key}>
                  {panel.content}
                </TabPane>
              );
            })}
          </Tabs>
        </Card>
      </div>
    );
  }
}
