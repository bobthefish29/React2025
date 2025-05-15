import React from 'react';
import { Card } from '../Card';
import { Product } from '../../types/Product';
import { Thumbnail } from '../Thumbnail';
import { Link } from 'react-router-dom';

interface Props {
  product: Product
}

// style={{
//display: 'flex',
//fDirection: 'row',
//width: '50%',
//alignItems: 'center',
//}}

export const ProductListRow = ({ product }: Props) => {
  return (
    <Card display="flex" fDirection="row" width="50%" alignItems="center">
      <Thumbnail description={product.description} image={product.image} />
      <Link key={product.id} to={`${product.id}`}>
        {product.title}
      </Link>
    </Card>
  );
};
