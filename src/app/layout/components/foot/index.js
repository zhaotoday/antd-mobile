import React from 'react'
import TabBar from 'components/weui/tabBar'
import I from 'components/i'
import styles from './theme/styles'

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
    return <TabBar className={styles['tab-bar']}>
      <TabBar.Item
        active={this.state.tab === '/'}
        onClick={this._handleClickTab('/')}
        icon={<I type="home" />}
        label="首页" />
      <TabBar.Item
        active={this.state.tab === '/help'}
        onClick={this._handleClickTab('/help')}
        icon={<I type="help" />}
        label="帮忙" />
      <TabBar.Item
        active={this.state.tab === '/need'}
        onClick={this._handleClickTab('/need')}
        icon={<I type="need" />}
        label="求助" />
      <TabBar.Item
        active={this.state.tab === '/setup'}
        onClick={this._handleClickTab('/setup')}
        icon={<I type="user" />}
        label="我" />
    </TabBar>
  }

  // 点击导航菜单
  _handleClickTab = (route) => {
    return () => {
      this.setState({
        tab: route
      })

      this.context.router.push(route)
    }
  }

}

