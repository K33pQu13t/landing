import { Box, Card, CardMedia } from '@mui/material';

const _16x9 = '56.25%';

const styles = {
    overlay: {
        position: 'absolute',
        bottom: '4vh',
        left: '20px',
        color: 'white',
    },
};

const PicWithOverlay = ({ image, content }) => {
    return (
        <Card sx={{ position: 'relative' }}>
            <CardMedia sx={{ height: 0, paddingTop: _16x9 }} image={image} />
            <Box sx={styles.overlay}>{content}</Box>
        </Card>
    );
};

export default PicWithOverlay;
