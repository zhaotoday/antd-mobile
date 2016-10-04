import React from 'react'
import { NavBar, Icon } from 'antd-mobile'

module.exports = class extends React.Component {
  render() {
    return <div>
      <header>
        <NavBar iconName="home" rightContent={[<Icon key="1" type="search" />]}>
          我要求助
        </NavBar>
      </header>
      <section>
        我要求助
      </section>
    </div>
  }
}
