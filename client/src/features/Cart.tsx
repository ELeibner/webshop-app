import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Item } from '../components/Item';
import { IProduct } from '../models/Product.model';
import { useAppSelector } from '../store/hooks';
import { currencyFormat } from '../utils/currency-format';

const Cart = () => {
    const { products } = useAppSelector((state) => state.cart.cart);
    const total = products.reduce(
        (acumm, curr) => acumm + curr.price * curr.qty,
        0
    );
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
                        <Typography variant="h6" color="text.primary">
                            {'Total: ' + currencyFormat(total)}
                        </Typography>
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
