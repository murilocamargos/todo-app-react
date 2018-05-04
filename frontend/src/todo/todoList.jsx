import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { mark } from './todoActions'

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'marked' : ''}>{todo.description}</td>
                <td>
                    <IconButton style="success" icon="check"
                        onClick={() => props.mark(todo)} hide={todo.done}/>
                    <IconButton style="warning" icon="undo"
                        onClick={() => props.mark(todo, false)} hide={!todo.done} />
                    <IconButton style="danger" icon="trash-o"
                        onClick={() => props.remove(todo)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th className="table-actions">Actions</th>
                </tr>
            </thead>
            <tbody>
                { renderRows() }
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ mark }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)