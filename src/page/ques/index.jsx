import React from 'react'
import { Row, Col, Card, Radio, Button, message } from 'antd'
import { observer, inject } from 'mobx-react'
import { toJS } from 'mobx'

const RadioGroup = Radio.Group
const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
}
const buttonStyle = { margin: '0px 3px' }

@inject((stores, props) => {
    return {
        userName: stores.userInfo.userName,
        step: stores.common.step,
        changeStep: stores.common.changeStep,
        data: stores.ques.question,
        changeAnswer: stores.common.changeAnswer,
        answer: stores.common.answer,
        standardAnswer: stores.ques.standardAnswer,
        checkGrade: stores.result.checkGrade
    }
})
@observer
export default class extends React.Component {

    componentWillMount() {
        !this.props.userName && this.props.router.push('/')
    }

    answerQues = (i, fn) => (e) => fn(e.target.value, i - 1)

    nextQues = (i, a, fn) => () => a[i - 1] ? fn(i + 1) : message.error('请选择一个答案！')

    prevQues = (i, fn) => () => fn(i - 1)

    completeQues = (i, l, sa, a, fn1, fn2, fn3) => () => {
        if (a.filter( v => v ).length !== a.length) {
            return message.error('请选择一个答案！')
        }
        a[i - 1] && (i === l) && fn1(i + 1, fn2)
        fn3(sa, a)
    }

    render() {
        let { userName, step, changeAnswer, answer, changeStep, router, standardAnswer, checkGrade } = this.props
        let data = toJS(this.props.data[step - 1]), length = this.props.data.length
        console.log('answer........', answer)
        return (
            <Row>
                {
                    userName && (
                        <Col span={6} offset={9}>
                            <Card title={data.title}>
                                <p>{data.ques}</p>
                                <RadioGroup onChange={this.answerQues(step, changeAnswer)} value={answer[step - 1]}>
                                    {data.options.map(v => <Radio key={v.value} style={radioStyle} value={v.value}>{v.des}</Radio>)}
                                </RadioGroup>
                                <div style={{ textAlign: 'right' }}>
                                    {step > 1 && <Button size='small' style={buttonStyle} onClick={this.prevQues(step, changeStep)}>上一题</Button>}
                                    {step < length && <Button size='small' style={buttonStyle} onClick={this.nextQues(step, answer, changeStep)}>下一题</Button>}
                                    {step === length && <Button size='small' style={buttonStyle} onClick={this.completeQues(step, length, standardAnswer, answer, changeStep, router.push, checkGrade)}>完成</Button>}
                                </div>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        )
    }
}
