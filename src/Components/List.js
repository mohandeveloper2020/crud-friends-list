import React, { Component } from 'react';

class List extends Component {

    handleEdit(ind) {
        this.props.handleEdit(ind);
    }

    handleDelete(ind) {
        this.props.handleDelete(ind);
    }

    render() {
        let { data } = this.props;

        return(
            <div className={'col-6'}>
                <h4>Friends list</h4>
                <table className={'table table-bordered'}>
                    <thead>
                        <tr>
                            <th scope={'col'}>Name</th>
                            <th scope={'col'}>Age</th>
                            <th scope={'col'} colSpan={'2'}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, ind) =>
                            <tr key={ind}>
                                <td>{d.name}</td>
                                <td>{d.age}</td>
                                <td colSpan="2">
                                    <button
                                        className={'btn btn-sm btn-outline-primary mr-3'}
                                        onClick={this.handleEdit.bind(this, ind)}
                                    ><i class="fas fa-pen pr-2"></i>{'Edit'}</button>
                               
                                    <button
                                        className={'btn btn-sm btn-outline-primary'}
                                        onClick={this.handleDelete.bind(this, ind)}
                                    ><i class="fas fa-trash pr-2"></i>{'Delete'}</button>
                                </td>
                            </tr>
                        )}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List;