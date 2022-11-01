import React, { Component } from 'react'

export default class Item extends Component {
    state = {
        id: '',
        name: '',
        idUpdate: '',
        nameUpdate: '',
        textSearch: ''
    }
    render() {
        let listData = []
        if (this.props.listItem) {
            listData = this.props.listItem.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>
                            <button
                                onClick={() => this.setState({ idUpdate: item._id, nameUpdate: item.name })}
                            >EDIT</button>
                        </td>
                        <td>
                            <button
                                onClick={() => this.props.deleteItem({ id: item._id })}
                            >DELETE</button>
                        </td>
                    </tr>
                )
            })
        }
        let PAGINATION = []
        let totalPage = this.props.totalPage
        for (let index = 1; index <= totalPage; index++) {
            let button = (
                <button
                    key={index}
                    onClick={() => this.props.textSearch ? this.props.search({ textSearch: this.state.textSearch, activePage: index }) : this.props.paginate(index)}
                    style={{ backgroundColor: this.props.activePage === index ? 'red' : null}}
                >{index}</button>
            )
            PAGINATION.push(button)
        }
        return (
            <div className='App'>
                <div className='Add'>
                    <input 
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />
                    <button 
                        onClick={() => this.state.name ? this.props.addItem({ name: this.state.name }) : alert('Nhap vao di ban oi')}
                    >ADD</button>
                </div>
                <div className='Update'>
                    <input 
                        value={this.state.nameUpdate}
                        onChange={(e) => this.setState({ nameUpdate: e.target.value })}
                    />
                    <button 
                        onClick={() => this.state.nameUpdate ? this.props.updateItem({ id: this.state.idUpdate, name: this.state.nameUpdate }) : alert('Nhap vao di ban oi')}
                    >UPDATE</button>
                </div>
                <div className='Search'>
                    <input 
                        value={this.state.textSearch}
                        onChange={(e) => this.setState({ textSearch: e.target.value })}
                    />
                    <button 
                        onClick={() => this.state.textSearch ? this.props.search({ textSearch: this.state.textSearch, activePage: 1 }) : alert('Nhap vao di ban oi')}
                    >SEARCH</button>
                </div>
                <div className='table'>
                    <table>
                        <thead>
                            <tr>
                                <td>STT</td>
                                <td>NAME</td>
                            </tr>
                        </thead>
                        <tbody>
                            {listData}
                        </tbody>
                    </table>
                    {PAGINATION}
                </div>
            </div>
        )
    }

}
