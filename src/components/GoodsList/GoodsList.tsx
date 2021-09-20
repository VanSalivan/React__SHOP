// Dependencies
import React from 'react';

// Externals
import './GoodsList.css';
import GoodsItem from '../GoodsItem';

// Types
import { IGoods } from '../../types/IGoods';

interface IGoodsProps {
  goods: IGoods[];
}

const GoodsList = ({ goods = [] }: IGoodsProps) => {

  if (!goods.length) {
    return <h3> Ничего нет </h3>;
  }

  return (
    <div className='goods'>
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export { GoodsList };
