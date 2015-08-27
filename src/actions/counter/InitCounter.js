import {Factory, Setter} from 'immutable-di/define'

function InitCounter({setCount}) {
    return function initCounter(value = 1) {
        setCount(value)
    }
}

export default Factory({
    setCount: Setter(['counter', 'value'])
})(InitCounter)
