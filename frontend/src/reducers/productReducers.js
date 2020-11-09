import * as constant from '../constants/productConstant';

export const productListReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case constant.PRODUCT_LIST_REQUEST:
			return { loading: true, products: [] };
		case constant.PRODUCT_LIST_SUCCESS:
			return { loading: false, products: action.payload };
		case constant.PRODUCT_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
