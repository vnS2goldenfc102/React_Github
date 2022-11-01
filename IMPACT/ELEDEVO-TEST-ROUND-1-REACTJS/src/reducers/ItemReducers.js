import { ADD_ITEMS_FAILURE, ADD_ITEMS_REQUEST, ADD_ITEMS_SUCCESS, DELETE_ITEMS_FAILURE, DELETE_ITEMS_REQUEST, DELETE_ITEMS_SUCCESS, PAGINATE_ITEMS_FAILURE, PAGINATE_ITEMS_REQUEST, PAGINATE_ITEMS_SUCCESS, SEARCH_ITEMS_FAILURE, SEARCH_ITEMS_REQUEST, SEARCH_ITEMS_SUCCESS, UPDATE_ITEMS_FAILURE, UPDATE_ITEMS_REQUEST, UPDATE_ITEMS_SUCCESS } from "../constants";

const DEFAULT_STATE = {
    listItem: [],
    isFetching: false,
    dataFetched: false,
    totalPage: 1,
    activePage: 1,
    textSearch: '',
    error: false,
    errorMessage: null
}

export const ItemReducers = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ADD_ITEMS_REQUEST:
        case UPDATE_ITEMS_REQUEST:
        case DELETE_ITEMS_REQUEST:
        case PAGINATE_ITEMS_REQUEST:
        case SEARCH_ITEMS_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        
        case ADD_ITEMS_SUCCESS:
        case UPDATE_ITEMS_SUCCESS:
        case DELETE_ITEMS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null
            }
        case PAGINATE_ITEMS_SUCCESS:
            return {
                ...state,
                listItem: action.payload.listPaginate,
                totalPage: action.payload.totalPage,
                activePage: action.payload.activePage,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null
            }
        case SEARCH_ITEMS_SUCCESS:
            return {
                ...state,
                listItem: action.payload.listPaginate,
                totalPage: action.payload.totalPage,
                activePage: action.payload.activePage,
                textSearch: action.payload.textSearch,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessage: null
            }
        case ADD_ITEMS_FAILURE:
        case UPDATE_ITEMS_FAILURE:
        case DELETE_ITEMS_FAILURE:
        case PAGINATE_ITEMS_FAILURE:
        case SEARCH_ITEMS_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.error
            }
        default:
            return {
                ...DEFAULT_STATE
            }
    }
}