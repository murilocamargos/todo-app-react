import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const term = description ? `&description__regex=/${description}/i` : ''
        axios.get(`${URL}?sort=-createdAt${term}`)
            .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }))

    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const mark = (todo, isDone = true) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: isDone })
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return dispatch => {
        dispatch({ type: 'TODO_CLEAR' })
        dispatch(search())
    }
}