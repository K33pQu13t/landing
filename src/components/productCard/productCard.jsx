import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import { useMemo, useState } from 'react';

const ProductCard = ({
    image,
    title,
    description,
    textCentered = false,
    maxWidth = 345,
    imageHeight = 'auto',
    descriptionSx = {},
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const onMouseEnter = () => {
        setIsHovered(true);
    };

    const onMouseLeave = () => {
        setIsHovered(false);
    };

    const imageTransform = useMemo(
        () => (isHovered ? 'scale(1.05)' : 'scale(1)'),
        [isHovered]
    );

    const textAlign = useMemo(
        () => (textCentered ? 'center' : 'inherit'),
        [textCentered]
    );

    return (
        <Card
            sx={{
                maxWidth: maxWidth,
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <CardActionArea>
                <CardMedia
                    sx={{
                        transform: imageTransform,
                        transition: 'transform 0.3s',
                    }}
                    component='img'
                    height={imageHeight}
                    image={image}
                />
                <CardContent sx={{ textAlign: textAlign }}>
                    <Typography
                        sx={{ fontWeight: 'bold' }}
                        gutterBottom
                        variant='h5'
                        component='div'
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={descriptionSx}
                        variant='body2'
                        color='text.secondary'
                    >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProductCard;
