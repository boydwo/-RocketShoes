import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {}));

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map((product) => ({
        ...product,
        priceFormated: formatPrice(product.price),
      }));
      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormated}</span>
          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />{' '}
              {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

// class Home extends Component {
//   state = {
//     products: [],
//   };

//   async componentDidMount() {
//     const response = await api.get('products');

//     const data = response.data.map((product) => ({
//       ...product,
//       priceFormated: formatPrice(product.price),
//     }));
//     this.setState({ products: data });
//   }

//   handleAddProduct = (id) => {
//     const { addToCartRequest } = this.props;
//     addToCartRequest(id);
//   };

//   render() {
//     const { products } = this.state;
//     const { amount } = this.props;
//     return (
//       <ProductList>
//         {products.map((product) => (
//           <li key={product.id}>
//             <img src={product.image} alt={product.title} />
//             <strong>{product.title}</strong>
//             <span>{product.priceFormated}</span>
//             <button
//               type="button"
//               onClick={() => this.handleAddProduct(product.id)}
//             >
//               <div>
//                 lineHeight:
//                 <MdAddShoppingCart size={16} color="#FFF" />{' '}
//                 {amount[product.id] || 0}
//               </div>
//               <span>ADICIONAR AO CARRINHO</span>
//             </button>
//           </li>
//         ))}
//       </ProductList>
//     );
//   }
// }
