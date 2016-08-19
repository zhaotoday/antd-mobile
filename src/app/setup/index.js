import React from 'react'
import I from 'components/i'
import TopBar from 'components/topBar'

module.exports = class extends React.Component {
  render() {
    return <div>
      <TopBar>
        <TopBar.Left>
          <I type="arrow-l" />
        </TopBar.Left>
        <TopBar.Title>账号设置</TopBar.Title>
        <TopBar.Right>
          <I type="home" />
        </TopBar.Right>
      </TopBar>
      账号设置
    </div>
  }
}
