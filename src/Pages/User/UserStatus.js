import { extendObservable } from 'mobx';

class UserStore {
    constructor() {
        extendObservable(this, {
            loading: true,  // to determine if it is loading 
            isLoggedIn: false, //to determine if the user is logged in 
            username: ''
        })
    }
}

export default new UserStore();