//Default  actions
export const Reducer = (state, action) => {
    switch (action.type) {

        case 'demo':
            return {...state, demo: action.payload };

            //Storage
        case 'storage/init':
            return {...state, storage: action.payload };

        case 'storage/status':
            return {...state, storageStatus: action.payload };



        default:
            return state;
    }
}