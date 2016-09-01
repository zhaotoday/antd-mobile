import React from 'react'
import styles from './theme/styles'
import { TabBar } from 'antd-mobile'

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
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white">
        <TabBar.Item
          title="生活"
          key="生活"
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/XLdKiKAwDRXQNhC.png' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/iKfBQdGdTMubhXy.png' }}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
          1
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
          title="口碑"
          key="口碑"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          2
        </TabBar.Item>
      </TabBar>
    </div>
  }

  _handleChange = () => {
  }
}
