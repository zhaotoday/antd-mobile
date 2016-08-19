import React from 'react'
import styles from './theme/styles'

module.exports = class extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render() {
    return <section className={styles.login}>
      login
    </section>
  }
}
