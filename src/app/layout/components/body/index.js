import React from 'react'
import styles from './theme/styles'

export default class extends React.Component {
  render() {
    return <section className={styles.bg}>
      {this.props.children}
    </section>
  }
}
