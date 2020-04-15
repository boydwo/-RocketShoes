import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmount } from './actions';

// (*) função generator mais forte que wait
function* addToCart({ id }) {
  // verifica se há produto repetido
  // select para acessar o estado
  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );
  // verifica estoques
  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  // qtd de itens no carrinho
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Produto fora de estoque');
    return;
  }

  if (productExists) {
    // put para chamar outra action
    yield put(updateAmount(id, amount));
  } else {
    // call para fazer uma chama a api
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };
    yield put(addToCartSuccess(data));
  }
}

// takeLatest ouve as actions mas pega apenas a ultima chamada em curto espaço de tempo
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
