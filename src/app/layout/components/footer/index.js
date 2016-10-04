import React from 'react'
import styles from './theme/styles'
import { TabBar } from 'antd-mobile'

export default class extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  state = {
    tab: '/'
  }

  set tab(pathname) {
    this.setState({
      tab: pathname
    })
  }

  render() {
    return <footer>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white">
        <TabBar.Item
          title="首页"
          key="首页"
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/XLdKiKAwDRXQNhC.png' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/iKfBQdGdTMubhXy.png' }}
          selected={this.state.tab === '/'}
          onPress={this._handlePressTab.bind(null, '/')}>
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
          title="帮忙"
          key="帮忙"
          selected={this.state.tab === '/help'}
          onPress={this._handlePressTab.bind(null, '/help')}>
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/EljxLrJEShWZObW.png' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/LWNaMdwAFSmYBFw.png' }}
          title="求助"
          key="求助"
          selected={this.state.tab === '/need'}
          onPress={this._handlePressTab.bind(null, '/need')}>
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/YWpPVCVOnJoCYhs.png' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/WadBBxOIZtDzsgP.png' }}
          title="我"
          key="我"
          selected={this.state.tab === '/setup'}
          onPress={this._handlePressTab.bind(null, '/setup')}>
        </TabBar.Item>
      </TabBar>
    </footer>
  }

  _handlePressTab = (route) => {
    this.setState({
      tab: route
    })

    this.context.router.push(route)
  }
}
