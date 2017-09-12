import { observable, action } from 'mobx'

class Store {
    @observable userName
    @action changeUserName = (name) => {
        this.userName = name
    }
    @action init = () => this.userName = undefined
}
const store = new Store()

export default store
