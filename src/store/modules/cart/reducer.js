import { produce } from 'immer';

export default function cart(state = [], action) {
    switch (action.type) {
        case '@cart/ADD_SUCESS':
            return produce(state, draft => {
                const { product } = action;
                draft.push(product);
            });

        case '@cart/REMOVE':
            return produce(state, draft => {
                const ProductExists = draft.findIndex(p => p.id === action.id);

                if (ProductExists >= 0) {
                    draft.splice(ProductExists, 1);
                }
            });

        case '@cart/UPDATE_SUCESS':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            });

        default:
            return state;
    }
}
