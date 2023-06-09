import ImageIcon from '@mui/icons-material/Image';
import { Box, CardActionArea, CardActions, IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IProduct } from '../models/Product.model';
import { useAppDispatch } from '../store/hooks';
import { removeFromCart } from '../store/productSlice';

import DeleteIcon from '@mui/icons-material/Delete';
import { currencyFormat } from '../utils/currency-format';

export const Item = (item: IProduct) => {
    const dispatch = useAppDispatch();

    return (
        <Card sx={{ maxWidth: 500, maxHeight: 200, display: 'flex' }}>
            <CardActionArea sx={{ display: 'flex' }}>
                {!item.picture ? (
                    <Box
                        sx={{
                            width: '30%',
                            height: 60,
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
                        height="80"
                        image={item.picture}
                        alt={item.name}
                    />
                )}
                <CardContent>
                    {item.name && (
                        <Typography gutterBottom variant="h5" component="div">
                            {`${item.name} (${currencyFormat(item.price)})`}
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
                {`x${item.qty}`}
                <IconButton
                    size="large"
                    color="inherit"
                    onClick={() => dispatch(removeFromCart(item.id))}
                >
                    <DeleteIcon color="error" />
                </IconButton>
            </CardActions>
        </Card>
    );
};
