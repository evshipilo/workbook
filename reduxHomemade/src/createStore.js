export function createStore(rootReducer, initialState) {
    let state=rootReducer(initialState, {type:'init'})  //начальное состояние init нет в
    // редюсере поэтому вернется initialState, state=initialState можно и так
    const subscribers=[] // массив функций которые вызваются методом dispatch

    return {  // Like observer
        //action={type:}
        dispatch(action) {
            state=rootReducer(state,action)  //меняем state в зависимости от action
            subscribers.forEach(subscriber=>subscriber())  // вызываем все функции подписчики которые
            // обращаются к state при помощи getState()
        },
        subscribe(callback) {
            subscribers.push(callback) //добавляем функцию в массив
        },
        getState(){
            return state  //получаем состояние state
        }
    }

}

// observer like
