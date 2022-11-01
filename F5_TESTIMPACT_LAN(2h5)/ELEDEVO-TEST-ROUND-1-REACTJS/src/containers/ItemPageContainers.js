import React, { Component } from 'react'
import * as actions from '../actions/ItemPageAction'
import { connect } from 'react-redux'
import Item from '../components/Item'
class ItemPageContainers extends Component {
    componentDidMount(){
        this.props.paginate(1)
    }
    render() {
        return (
            <Item 
                {...this.props}
            />
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        listItem: state.items.listItem,
        totalPage: state.items.totalPage,
        activePage: state.items.activePage, 
        textSearch: state.items.textSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        paginate: (payload) => {
            dispatch(actions.paginateItemsRequest(payload))
        },
        search: (payload) => {
            dispatch(actions.searchItemsRequest(payload))
        },   
        addItem: (payload) => {
            dispatch(actions.addItemsRequest(payload))
        },   
        updateItem: (payload) => {
            dispatch(actions.updateItemsRequest(payload))
        },
        deleteItem: (payload) => {
            dispatch(actions.deleteItemsRequest(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainers)

