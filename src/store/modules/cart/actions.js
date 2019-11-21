export function addToCart(product) {
    return {
        type: '@cart/ADD',
        product,
    };
}

export function RemoveFromCart(id) {
    return {
        type: '@cart/REMOVE',
        id,
    };
}

export function updateCart(id, amount) {
    return {
        type: '@cart/UPDATE',
        id,
        amount,
    };
}
