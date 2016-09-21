import React from 'react'
import styles from './theme/styles'
import { TabBar, Button, Modal } from 'antd-mobile'

export default class extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  state = {
    selectedTab: 'redTab',
    notifCount: 0,
    presses: 0
  }

  showAlert() {
    Modal.alert('删除', '确定删除么???', [
      {text: '取消', onPress: () => console.log('cancel')},
      {text: '确定', onPress: () => console.log('ok')},
    ])
  }

  render() {
    return <div className={styles['tab-bar']}>
      <Button type="primary" onClick={this.showAlert}>click</Button>
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
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
          title="口碑"
          key="口碑"
          badge={10}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab'
            });
          }}>
        </TabBar.Item>
      </TabBar>
    </div>
  }

  _handleChange = () => {
  }
}
