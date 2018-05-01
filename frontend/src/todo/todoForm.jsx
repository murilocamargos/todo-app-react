import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandler = (e) => (e.key === 'Enter') ? props.handleAdd() : null

    return (
        <div role="form" className="todo-form">
            <Grid cols='12 9 10'>
                <input id="description" className="form-control"
                    placeholder="Add item" type="text" value={props.description}
                    onChange={props.handleChange} onKeyUp={keyHandler}/>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
            </Grid>
        </div>
    )
}