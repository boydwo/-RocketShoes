import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-masculino/26/COL-4399-026/COL-4399-026_detalhe1.jpg?ts=1584531781?ims=280x280"
          alt="Tenis"
        />
        <strong>Tênis Adidas Falcon Masculino</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
            3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-masculino/26/COL-4399-026/COL-4399-026_detalhe1.jpg?ts=1584531781?ims=280x280"
          alt="Tenis"
        />
        <strong>Tênis Adidas Falcon Masculino</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
            3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
          asd
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-masculino/26/COL-4399-026/COL-4399-026_detalhe1.jpg?ts=1584531781?ims=280x280"
          alt="Tenis"
        />
        <strong>Tênis Adidas Falcon Masculino</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
            3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-masculino/26/COL-4399-026/COL-4399-026_detalhe1.jpg?ts=1584531781?ims=280x280"
          alt="Tenis"
        />
        <strong>Tênis Adidas Falcon Masculino</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
            3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-masculino/26/COL-4399-026/COL-4399-026_detalhe1.jpg?ts=1584531781?ims=280x280"
          alt="Tenis"
        />
        <strong>Tênis Adidas Falcon Masculino</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
            3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
