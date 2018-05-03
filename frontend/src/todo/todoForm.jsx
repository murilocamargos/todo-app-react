import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e) {
        (e.key === 'Enter') ? this.props.handleAdd() : null
    }

    componentWillMount() {
        this.props.search()
    }

    render() {
        return (
            <div role="form" className="todo-form">
                <Grid cols='12 9 10'>
                    <input id="description" className="form-control"
                        placeholder="Add item" type="text" value={this.props.description}
                        onChange={this.props.changeDescription} onKeyUp={this.keyHandler}/>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style="primary" icon="plus" onClick={this.props.handleAdd} />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeDescription, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)