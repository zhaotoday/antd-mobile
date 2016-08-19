import React from 'react'
import Tab from 'components/weui/tab'
import styles from './theme/styles'

export default class extends React.Component {
  render() {
    return <Tab.Body className={styles.bg}>
      {this.props.children}
    </Tab.Body>
  }
}
