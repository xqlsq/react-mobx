import React from 'react'
import { Card, Col, Row, Input, message, Button } from 'antd'
import { observer, inject } from 'mobx-react'

@inject(stores => {
    return {
        changeUserName: stores.userInfo.changeUserName,
        userName: stores.userInfo.userName,
        changeStep: stores.common.changeStep
    }
})
@observer
export default class extends React.Component {
    state = {
        value: ''
    }
    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    getStart = (v) => {
        if (!v) {
            message.error('请输入一个昵称')
        }
        this.props.changeUserName(v)
        this.props.changeStep(1, this.props.router.push)
    }
    enterQues = (e) => {
        if (e.nativeEvent.keyCode === 13) {
            this.getStart(e.target.value)
        }
    }
    clickHandle = () => {
        this.getStart(this.state.value)
    }
    render() {
        return (
            <Row>
                <Col span={6} offset={9}>
                    <Card title='智力测试题'>
                        <Input placeholder='请输入一个昵称' onKeyPress={this.enterQues} onChange={this.onChange} />
                        <Col style={{ marginTop: 20, textAlign: 'right' }}>
                            <Button onClick={this.clickHandle} size='small'>开始答题</Button>
                        </Col>
                    </Card>
                </Col>
            </Row>
        )
    }
}
