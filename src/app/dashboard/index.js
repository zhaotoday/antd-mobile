import React from 'react'
import TopBar from 'components/topBar'
import I from 'components/i'

module.exports = class extends React.Component {
  render() {
    return <section>
      <TopBar>
        <TopBar.Left>
          <I type="arrow-l" />
        </TopBar.Left>
        <TopBar.Title>首页</TopBar.Title>
        <TopBar.Right>
          <I type="home" />
        </TopBar.Right>
      </TopBar>
      首页
    </section>
  }
}
