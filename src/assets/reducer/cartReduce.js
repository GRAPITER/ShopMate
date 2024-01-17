
export const cartReduce = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case "Add_To_Cart":
            return { ...state, cartList: payload.products }
        case "Remove_From_Cart":
            return { ...state, cartList: payload.products }
        case "Update_Total":
            return { ...state, total: payload.total }

        default:
            throw new Error('not case found')
    }



}