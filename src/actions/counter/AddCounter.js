import {Factory, Setter, Getter} from 'immutable-di/define'

function AddCounter({setCount, getCount}) {
    return function addCounter(value = 1) {
        setCount(getCount() + value)
    }
}

export default Factory({
    setCount: Setter(['counter', 'value']),
    getCount: Getter(['counter', 'value'])
})(AddCounter)
