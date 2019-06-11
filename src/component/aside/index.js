import React, { Component } from "react";
import { Menu, Icon } from "antd";
import MenuConfig from "./../../config/menuConfig";
import "./index.less";
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup

export default class Aside extends Component {
  componentWillMount() {
    const MenuTreeNode = this.renderMenu(MenuConfig);

    this.setState({
      MenuTreeNode
    });
  }

  renderMenu = data => {
    // 递归实现 任意级子菜单
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu key={item.key} title={item.title}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return <Menu.Item key={item.key}>{item.title}</Menu.Item>;
    });
  };

  render() {
    return (
      <aside>
        <div className="logo">
          <img src="/assets/logo.png" alt="logo" />
          <h1>IT-资产管理系统</h1>
        </div>

        <Menu theme="dark">{this.state.MenuTreeNode}</Menu>
      </aside>
    );
  }
}
