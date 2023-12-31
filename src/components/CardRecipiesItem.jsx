
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
function CardRecipiesItem({ title, imageUrl }){
    //console.log(title)
    return(
        <Card style={{  
            maxWidth: '200px', 
            margin: '10px'}}>
        <CardMedia
            component="img"
            style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%', // membuat gambar bulat
                top: '-10px',
                margin: 'auto' // pindahkan ke atas sebanyak 50px// pusatkan gambar
            }}
            image={imageUrl}
            alt={title}
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" align="center">
                {title}
            </Typography>
        </CardContent>
    </Card>
    )
}

export default CardRecipiesItem