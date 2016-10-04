import React from 'react'
import { NavBar, Icon } from 'antd-mobile'

module.exports = class extends React.Component {
  render() {
    return <div>
      <header>
        <NavBar iconName="home" rightContent={[<Icon key="1" type="search" />]}>
          设置
        </NavBar>
      </header>
      <section>
        我
      </section>
    </div>
  }
}
