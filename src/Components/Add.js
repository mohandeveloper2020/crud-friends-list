import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            editMode: true
        }
    }

    handleChange(field, { target }) {
        if(field === 'name') {
            var nameNew = target.value;
            var ageEdit = this.state.age ? this.state.age : this.props.editData.row.age;
            this.setState({
                name: nameNew,
                age: ageEdit,
                editMode: false
            })

        } else if(field === 'age'){
            var nameEdit = this.state.name ? this.state.name : this.props.editData.row.name;
            var ageNew = target.value;
            this.setState({
                name: nameEdit,
                age: ageNew,
                editMode: false
            })
        }        
    }

    handleSubmit(e) {
        e.preventDefault();
        let { name, age } = this.state;
        let { editData } = this.props;

        if(!editData.row) {
            let newData = {
                name,
                age
            }
    
            this.props.handleSubmit(newData);
        } else {
            let editedData = this.props.editData.row;
            editedData.name = name;
            editedData.age = age;
            // console.log(editedData)
            this.props.handleUpdate(editedData);
        }

        this.setState( {
            name: '',
            age: '',
            editMode: true
        })
        ReactDOM.findDOMNode(this.refs.nameInput).focus();
    }

    render() {
        let { editData } = this.props;
        let name = editData.row && this.state.editMode ? editData.row.name : this.state.name;
        let age = editData.row && this.state.editMode ? editData.row.age : this.state.age;

        return(
            <div className={'col-6'}>
                <h4>Add Friend</h4>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className={'form-group'}>
                        <label>Name</label>
                        <input 
                            type={'text'} 
                            placeholder={'Enter name'}
                            className={'form-control'}
                            value={name}
                            ref={'nameInput'}
                            onChange={this.handleChange.bind(this, 'name')}/>
                    </div>

                    <div className={'form-group'}>
                        <label>Age</label>
                        <input
                            type={'number'}
                            placeholder={'Enter age'}
                            className={'form-control'}
                            value={age}
                            onChange={this.handleChange.bind(this, 'age')}/>
                    </div>
                    <button
                        type={'submit'}
                        className={'btn btn-primary'}
                        >
                        {!editData.row ? 'Add to list' : 'Update list'}
                    </button>
                </form>
            </div>
        )
    }
}

export default Add;