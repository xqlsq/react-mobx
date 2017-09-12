import { observable, action } from 'mobx'

class Store {
    router = ['userInfo', 'ques', 'ques', 'ques', 'ques', 'result']

    @observable step = 0

    @observable answer = new Array(4)

    @action changeStep = (num, fn) => {
        num && (this.step = num)
        fn && fn(this.router[num])
    }
    @action init = () => (this.answer = new Array(4)) && (this.step = 0)
    @action changeAnswer = (a, i) => this.answer[i] = a
}

const store = new Store()

export default store
