export const filreReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, isLoading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, isLoading: false, files: action.payload };
        case 'FETCH_ERROR':
            return { ...state, isLoading: false, error: action.payload };
        case 'ADD_FILE':
            return { ...state, files: [...state.files, action.payload] };
        case 'DELETE_FILE':
            return { ...state, files: state.files.filter(file => file.resource_id !== action.payload) };
        default:
            return state;
    }
}
