export function addToCart(id, navigation) {
    return {
        type: '@cart/ADD_REQUEST',
        id,
        navigation,
    };
}

export function addSucess(product) {
    return {
        type: '@cart/ADD_SUCESS',
        product,
    };
}

export function RemoveFromCart(id) {
    return {
        type: '@cart/REMOVE',
        id,
    };
}

export function updateCartRequest(id, amount) {
    return {
        type: '@cart/UPDATE_REQUEST',
        id,
        amount,
    };
}

export function updateCartSucess(id, amount) {
    return {
        type: '@cart/UPDATE_SUCESS',
        id,
        amount,
    };
}
