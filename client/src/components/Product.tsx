import ImageIcon from '@mui/icons-material/Image';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { IProduct } from '../models/Product.model';
import { useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/productSlice';

interface ProductProps extends IProduct {}

export default function Product(item: ProductProps) {
    const dispatch = useAppDispatch();
    const [amount, setAmount] = useState(1);
    const isValid = (value: number) => value !== 0;

    const handleAmount = (value: number) =>
        setAmount((prev) => (isValid(prev + value) ? prev + value : prev));

    return (
        <Card sx={{ maxWidth: 300, minWidth: 200 }}>
            <CardActionArea>
                {!item.picture ? (
                    <Box
                        sx={{
                            width: '100%',
                            height: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            color: 'gray'
                        }}
                    >
                        <ImageIcon fontSize="large" />
                    </Box>
                ) : (
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.picture}
                        alt={item.name}
                    />
                )}
                <CardContent>
                    {item.name && (
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                    )}
                    {item.description && (
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    )}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => handleAmount(-1)}>-</Button>
                {amount}
                <Button onClick={() => handleAmount(1)}>+</Button>
                <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={() =>
                        dispatch(addToCart({ ...item, qty: amount }))
                    }
                >
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
}
