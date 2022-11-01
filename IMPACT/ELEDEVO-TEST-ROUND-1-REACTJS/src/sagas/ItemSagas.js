import { takeEvery, put, select} from '@redux-saga/core/effects'
import { ADD_ITEMS_REQUEST, DELETE_ITEMS_REQUEST, LIMIT, PAGINATE_ITEMS_REQUEST, SEARCH_ITEMS_REQUEST, UPDATE_ITEMS_REQUEST } from '../constants'
import CallApi from '../fetchAPIs/CallApi'
import * as actions from '../actions/ItemPageAction'

function* handleAdd(data) {
    try {
        yield CallApi('POST', ``, data.payload)
        yield put(actions.addItemsSuccess())
        const store = yield select((state) => state.items)
        if (store.textSearch){
            const resSearch = yield CallApi('GET', `/search?activePage=${store.activePage}&limit=${LIMIT}&textSearch=${store.textSearch}`)
            if(data.payload.name.includes(store.textSearch)){
                const payload = {
                    activePage: resSearch.totalPage,
                    textSearch: store.textSearch
                }
                yield put(actions.searchItemsRequest(payload))
            } else {
                const payload = {
                    activePage: 1,
                    textSearch: store.textSearch,
                    totalPage: 1,
                    listPaginate: [data.payload]
                }
                yield put(actions.searchItemsSuccess(payload))
            }
        }
        else {
            const res = yield CallApi('GET', `/pagination?activePage=${1}&limit=${LIMIT}`)
            yield put(actions.paginateItemsRequest(res.totalPage))
        }
    } catch (error) {
        yield put(actions.addItemsFailure(error))
    }
}

function* handleUpdate(data) {
    try {
        yield CallApi('PUT', `/${data.payload.id}`, data.payload)
        yield put(actions.updateItemsSuccess())
        const store = yield select((state) => state.items)
        if (store.textSearch){
            if(data.payload.name.includes(store.textSearch)){
                const payload = {
                    activePage: store.activePage,
                    textSearch: store.textSearch
                }
                yield put(actions.searchItemsRequest(payload))
            } else {
                const payload = {
                    activePage: 1,
                    textSearch: store.textSearch,
                    totalPage: 1,
                    listPaginate: [data.payload]
                }
                yield put(actions.searchItemsSuccess(payload))
            }
        }
        else {
            yield put(actions.paginateItemsRequest(store.activePage))
        }
    } catch (error) {
        yield put(actions.updateItemsFailure(error))
    }
}

function* handleDelete(data) {
    try {
        yield CallApi('DELETE', `/${data.payload.id}`)
        yield put(actions.deleteItemsSuccess())
        const store = yield select((state) => state.items)
        if (store.textSearch){
            if(store.listItem.length <= 1 && store.activePage === 1){
                yield put(actions.searchItemsSuccess( {activePage: 1, totalPage: 1, textSearch: store.textSearch}))
            } else if(store.listItem.length <= 1) {
                yield put(actions.searchItemsRequest({activePage: store.activePage - 1, textSearch: store.textSearch}))
            } else {
                yield put(actions.searchItemsRequest({activePage: store.activePage, textSearch: store.textSearch}))
            }
        } else {
            if(store.listItem.length <= 1 && store.activePage === 1){
                yield put(actions.paginateItemsSuccess( {activePage: 1, totalPage: 1}))
            } else if(store.listItem.length <= 1) {
                yield put(actions.paginateItemsRequest(store.activePage - 1))
            } else {
                yield put(actions.paginateItemsRequest(store.activePage))
            }
        }
    } catch (error) {
        yield put(actions.deleteItemsFailure(error))
    }
}

function* handlePaginate(data) {
    try {
        const res = yield CallApi('GET', `/pagination?activePage=${data.payload}&limit=${LIMIT}`)
        const payload = {
            activePage: data.payload,
            totalPage: res.totalPage,
            listPaginate: res.listPaginate
        }
        yield put(actions.paginateItemsSuccess(payload))
        if(res.listPaginate.length < 1 && data.payload === 1){
            yield put(actions.paginateItemsSuccess( {activePage: 1, totalPage: 1}))
        }
    } catch (error) {
        yield put(actions.paginateItemsFailure(error))
    }
}

function* handleSearch(data) {
    try {
        const res = yield CallApi('GET', `/search?activePage=${data.payload.activePage}&limit=${LIMIT}&textSearch=${data.payload.textSearch}`)
        const payload = {
            activePage: data.payload.activePage,
            textSearch: data.payload.textSearch,
            totalPage: res.totalPage,
            listPaginate: res.listPaginate
        }
        yield put(actions.searchItemsSuccess(payload))
        if(res.listPaginate.length < 1 && data.payload.activePage === 1){
            yield put(actions.searchItemsSuccess( {activePage: 1, totalPage: 1, textSearch: data.payload.textSearch}))
        }
    } catch (error) {
        yield put(actions.searchItemsFailure(error))
    }
}

const ItemSagas = [
    takeEvery(PAGINATE_ITEMS_REQUEST, handlePaginate),
    takeEvery(SEARCH_ITEMS_REQUEST, handleSearch),
    takeEvery(ADD_ITEMS_REQUEST, handleAdd),
    takeEvery(UPDATE_ITEMS_REQUEST, handleUpdate),
    takeEvery(DELETE_ITEMS_REQUEST, handleDelete)
]

export default ItemSagas