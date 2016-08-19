import React from 'react'
import styles from './theme/styles'

export default class extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render() {
    return <section className={styles['tab-bar']}>
      foot
    </section>
  }
}
