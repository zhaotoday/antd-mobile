import React from 'react'
import { Alert } from 'react-weui/lib/components/dialog'

module.exports = class extends React.Component {
  render() {
    return <div>
      <Alert title="the title" buttons={[{ label: '好的' }]}>
        警告
      </Alert>
      article list
    </div>
  }
}
