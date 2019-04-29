import React, { Component } from 'react';
// import './App.css';
import '../Styles/main.scss';
import Add from './Add';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {name: 'Mohan', age: 33}
      ],
      editData: {
        index: '', 
        row: ''
      }
    }
  }

  handleSubmit(newData) {
    let { data } = this.state;
    data.splice();
    data.push(newData);

    this.setState({
      data
    })
  }

  handleEdit(ind) {
    let { data } = this.state;
    let { editData } = this.state;
    editData.index = ind;
    editData.row = data[ind]; 

    this.setState({
      editData: editData
    })
  }

  handleUpdate(editedData) {
    let { data } = this.state;
    let { editData } = this.state;
    data[editedData.index] = editData.row;

    this.setState({
      data,
      editData: {
        index: '',
        row: ''
      }
    })
  }

  handleDelete(ind) {
    let { data } = this.state;
    data.splice();
    data.splice(ind, 1);

    this.setState({
      data
    })

  }

  render() {
    let { data, editData } = this.state;

    return (
      <div>
        <div className={'col-12'}>
          <div className={'row'}>
            
            <Add 
              handleSubmit={this.handleSubmit.bind(this)}
              editData={editData}
              handleUpdate={this.handleUpdate.bind(this)}/>
            <List 
              data={data}
              handleEdit={this.handleEdit.bind(this)}
              handleDelete={this.handleDelete.bind(this)}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
