import React from 'react'
import Button from 'components/weui/button'
import Cell from 'components/weui/cell'
import Cells from 'components/weui/cells'
import Form from 'components/weui/form/form'
import Input from 'components/weui/form/input'
import TextArea from 'components/weui/form/textArea'
import I from 'components/i'
import TopBar from 'components/topBar'

module.exports = class extends React.Component {
  render() {
    return <section>
      <TopBar>
        <TopBar.Left>
          <I type="arrow-l" />
        </TopBar.Left>
        <TopBar.Title>找人帮忙</TopBar.Title>
        <TopBar.Right>
          <I type="home" />
        </TopBar.Right>
      </TopBar>
      <Cells.Title>任务名称</Cells.Title>
      <Form>
        <Form.Cell>
          <Cell.Body>
            <Input type="text" placeholder="请输入任务名称" />
          </Cell.Body>
        </Form.Cell>
      </Form>
      <Cells.Title>任务介绍</Cells.Title>
      <Form>
        <Form.Cell>
          <Cell.Body>
            <TextArea rows="3" maxlength="200" placeholder="请输入任务介绍" />
          </Cell.Body>
        </Form.Cell>
      </Form>
      <Cells.Title>起点</Cells.Title>
      <Form>
        <Form.Cell>
          <Cell.Body>
            <Input type="text" placeholder="请输入任务名称" />
          </Cell.Body>
        </Form.Cell>
      </Form>
      <Cells.Title>终点</Cells.Title>
      <Form>
        <Form.Cell>
          <Cell.Body>
            <Input type="text" placeholder="请输入任务名称" />
          </Cell.Body>
        </Form.Cell>
      </Form>
      <Button.Area>
        <Button>发布</Button>
      </Button.Area>
    </section>
  }
}
