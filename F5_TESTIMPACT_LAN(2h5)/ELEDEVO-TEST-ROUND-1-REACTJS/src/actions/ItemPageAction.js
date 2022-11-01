import * as types from '../constants'

function addItemsRequest(payload) {
    return {
        type: types.ADD_ITEMS_REQUEST,
        payload
    }
}

function addItemsSuccess(payload) {
    return {
        type: types.ADD_ITEMS_SUCCESS,
        payload
    }
}

function addItemsFailure(payload) {
    return {
        type: types.ADD_ITEMS_FAILURE,
        payload
    }
}

function updateItemsRequest(payload) {
    return {
        type: types.UPDATE_ITEMS_REQUEST,
        payload
    }
}

function updateItemsSuccess(payload) {
    return {
        type: types.UPDATE_ITEMS_SUCCESS,
        payload
    }
}

function updateItemsFailure(payload) {
    return {
        type: types.UPDATE_ITEMS_FAILURE,
        payload
    }
}

function deleteItemsRequest(payload) {
    return {
        type: types.DELETE_ITEMS_REQUEST,
        payload
    }
}

function deleteItemsSuccess(payload) {
    return {
        type: types.DELETE_ITEMS_SUCCESS,
        payload
    }
}

function deleteItemsFailure(payload) {
    return {
        type: types.DELETE_ITEMS_FAILURE,
        payload
    }
}

function paginateItemsRequest(payload) {
    return {
        type: types.PAGINATE_ITEMS_REQUEST,
        payload
    }
}

function paginateItemsSuccess(payload) {
    return {
        type: types.PAGINATE_ITEMS_SUCCESS,
        payload
    }
}

function paginateItemsFailure(payload) {
    return {
        type: types.PAGINATE_ITEMS_FAILURE,
        payload
    }
}

function searchItemsRequest(payload) {
    return {
        type: types.SEARCH_ITEMS_REQUEST,
        payload
    }
}

function searchItemsSuccess(payload) {
    return {
        type: types.SEARCH_ITEMS_SUCCESS,
        payload
    }
}

function searchItemsFailure(payload) {
    return {
        type: types.SEARCH_ITEMS_FAILURE,
        payload
    }
}

export { paginateItemsRequest, paginateItemsSuccess, paginateItemsFailure,
        searchItemsRequest, searchItemsSuccess, searchItemsFailure,
        addItemsRequest, addItemsSuccess, addItemsFailure,
        updateItemsRequest, updateItemsSuccess, updateItemsFailure,
        deleteItemsRequest, deleteItemsSuccess, deleteItemsFailure } 