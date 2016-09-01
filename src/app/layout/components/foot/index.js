import React from 'react'
import styles from './theme/styles'
import { Tabs, Icon, WhiteSpace } from 'antd-mobile'

const TabPane = Tabs.TabPane

export default class extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  state = {
    selectedTab: 'redTab',
    notifCount: 0,
    presses: 0
  }

  render() {
    return <div className={styles['tab-bar']}>
      <Tabs type="tabbar" defaultActiveKey="1" onChange={this._handleChange}>
        <TabPane tab={<span><Icon type="home" />首页</span>} key="1"></TabPane>
        <TabPane tab={<span><Icon type="team" />好友</span>} key="2"></TabPane>
        <TabPane tab={<span><Icon type="setting" />设置</span>} key="3"></TabPane>
      </Tabs>
    </div>
  }

  _handleChange = () => {
  }
}
