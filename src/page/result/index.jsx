import React from 'react'
import { Row, Col, Card, Button } from 'antd'
import { inject, observer } from 'mobx-react'

@inject(stores => {
    return {
        grade: stores.result.grade,
        result: stores.result.result,
        quesLength: stores.ques.question.length,
        userName: stores.userInfo.userName,
        changeStep: stores.common.changeStep,
        init: () => {
            stores.common.init()
            stores.result.init()
            stores.userInfo.init()
        }
    }
})
@observer
export default class extends React.Component {
    componentWillMount() {
        !this.props.userName && this.props.router.push('/')
    }
    reStart = () => {
        this.props.changeStep(0, this.props.router.push)
        this.props.init()
    }
    render() {
        let { result, grade, quesLength, userName } = this.props
        return (
            <Row>
                <Col span={6} offset={9}>
                    <Card title='成绩单'>
                        {userName}, 您好！本关共 <b>{quesLength}</b> 题，您答对了 <b>{grade}</b> 题，成绩{result}!
                        <Col style={{ marginTop: 20, textAlign: 'right' }}>
                            <Button size='small' onClick={this.reStart}>重新作答</Button>
                        </Col>
                    </Card>
                </Col>
            </Row>
        )
    }
}