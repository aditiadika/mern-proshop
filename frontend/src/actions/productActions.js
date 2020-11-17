import * as constant from '../constants/productConstant';
import axios from 'axios';

export const listProducts = () => async (dispatch) => {
	try {
		dispatch({ type: constant.PRODUCT_LIST_REQUEST });

		const { data } = await axios.get('/api/products');

		dispatch({ type: constant.PRODUCT_LIST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: constant.PRODUCT_LIST_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};

export const listProductDetail = (id) => async (dispatch) => {
	try {
		dispatch({ type: constant.PRODUCT_DETAIL_REQUEST });

		const { data } = await axios.get(`/api/products/${id}`);

		dispatch({ type: constant.PRODUCT_DETAIL_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: constant.PRODUCT_DETAIL_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};
