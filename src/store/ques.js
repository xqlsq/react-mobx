import { observable, computed } from 'mobx'

class Store {
    @observable
    question = [
        {
            title: '第一题',
            ques: '先秦时代，教育内容以“六艺”为主，下列不属于“六艺”的是',
            options: [
                { des: 'A、射', value: 'A' },
                { des: 'B、御', value: 'B' },
                { des: 'C、礼', value: 'C' },
                { des: 'D、武', value: 'D' }
            ],
            answer: 'D'
        },
        {
            title: '第二题',
            ques: '经魏晋多名士，有著名的竹林七贤， 《与山巨源绝交书》是竹林七贤中的谁写 给山涛的',
            options: [
                { des: 'A、阮籍', value: 'A' },
                { des: 'B、嵇康', value: 'B' },
                { des: 'C、刘伶', value: 'C' },
                { des: 'D、向秀', value: 'D' }
            ],
            answer: 'B'
        },
        {
            title: '第三题',
            ques: '科举制在中国影响深远， 乡试录取者称为“举人”， 会试录取者称为“贡生”， 那么殿试录取者称为',
            options: [
                { des: 'A、大元', value: 'A' },
                { des: 'B、“解元”', value: 'B' },
                { des: 'C、“进士”', value: 'C' },
                { des: 'D、“榜眼”', value: 'D' }
            ],
            answer: 'C'
        },
        {
            title: '第四题',
            ques: '“生当做人杰，死亦为鬼雄，至今思项羽，不肯过江东。”为哪位诗人的作品?',
            options: [
                { des: 'A、李白', value: 'A' },
                { des: 'B、杜甫', value: 'B' },
                { des: 'C、李商隐', value: 'C' },
                { des: 'D、李清照', value: 'D' }
            ],
            answer: 'D'
        }
    ]
    @computed get standardAnswer() {
        return this.question.map( v => v.answer )
    }
}
const store = new Store()

export default store
