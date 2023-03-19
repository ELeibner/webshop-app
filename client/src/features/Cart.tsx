import { Button } from '@mui/material';
import { Stack } from '@mui/system';
import { Item } from '../components/Item';
import { IProduct } from '../models/Product.model';
import { useAppSelector } from '../store/hooks';

const Cart = () => {
    const { products } = useAppSelector((state) => state.cart.cart);
    return (
        <>
            <Stack
                direction={{ xs: 'column', sm: 'column' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent={'center'}
                alignItems={'center'}
                padding={2}
            >
                {products.length === 0 ? (
                    <div>{'Basket empty'}</div>
                ) : (
                    <>
                        {products.map((item: IProduct) => (
                            <Item key={item.id} {...item} />
                        ))}
                        <Button variant="contained" color="warning">
                            Checkout
                        </Button>
                    </>
                )}
            </Stack>
        </>
    );
};

export default Cart;
