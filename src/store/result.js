import { observable, action } from 'mobx'

class Store {
    results = ['合格，奖励妹纸一枚', '不合格，看来文化底蕴不够啊']
    @observable grade = 0
    @observable result
    @action checkGrade = (standardAnswer, answer) => {
        let num = 0
        answer.map((a, i) => standardAnswer[i] === a && num++)
        this.grade = num
        this.result = num > 2 ? this.results[0] : this.results[1]
    }
    @action init = () => (this.grade = 0) && (this.result = undefined)
}
const store = new Store()

export default store
