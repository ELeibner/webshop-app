import { Stack } from '@mui/system';
import { useEffect } from 'react';
import Product from '../components/Product';
import { IProduct } from '../models/Product.model';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getProducts } from '../store/productSlice';

const Home = () => {
    const dispatch = useAppDispatch();
    const { searchProducts, products, isLoading } = useAppSelector(
        (state) => state.cart
    );

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <Stack
            direction={{ xs: 'column', sm: 'column' }}
            spacing={{ xs: 1, sm: 4, md: 8 }}
            justifyContent={'center'}
            alignItems={'center'}
            padding={2}
        >
            {isLoading ? (
                'Loading...'
            ) : (
                <>
                    {searchProducts &&
                        searchProducts.length === 0 &&
                        'No matches'}
                    {products && products.length === 0 && 'Empty'}
                    {(searchProducts ?? products).map((item: IProduct) => (
                        <Product key={item.id} {...item} />
                    ))}
                </>
            )}
        </Stack>
    );
};

export default Home;
