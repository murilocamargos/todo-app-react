import React, { Component } from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()
    }

    refresh() {
        Axios.get(`${URL}?sort=-createdAt`).then(resp => {
            this.setState({ description: '', list: resp.data })
        })
    }

    handleChange(e) {
        this.setState({ description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        Axios.post(URL, { description }).then(resp => this.refresh())
    }

    handleRemove(todo) {
        Axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh())
    }

    render() {
        return (
            <div>
                <PageHeader name='Todos' small='Add' />
                <TodoForm description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange} />
                <TodoList list={this.state.list} 
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}