import './styles.css'
import {createStore} from "./createStore";
import {rootReducer} from "./myRedux/rootReducer";

let counter = document.getElementById('counter')
let addBtn = document.getElementById('add')
let subBtn = document.getElementById('sub')
let asyncBtn = document.getElementById('async')
let themeBtn = document.getElementById('theme')

let store = createStore(rootReducer, 0)  //create store
// store.dispatch({type: 'increment'})
// console.log(store.getState())

counter.innerText = store.getState()  //begin view

// создаем функцию подписчика которая будет вызываться методом dispatch()
// она получает state из store и отображает его
store.subscribe(() => {
    let state = store.getState()
    counter.innerText = state

})

// вызываем функции подписчики, и передаем тип экшена чтобы rootReducer изменил store
addBtn.addEventListener('click', () => {
    store.dispatch({type: 'increment'})
})
subBtn.addEventListener('click', () => {
    store.dispatch({type: 'decrement'})

})

asyncBtn.addEventListener('click', () => {

})

themeBtn.addEventListener('click', () => {
    // document.body.classList.toggle('dark')
})

