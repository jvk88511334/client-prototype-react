import { Typography, Grid, Box, List } from '@mui/material';
import RadioPlayer from '../components/RadioPlayer';
import radioLists from '../data/radios.json';

function RadioView() {
    return (
        <Grid container>
            <Grid item xs={0.5} sm={1} md={3.5} sx={{ bgcolor: 'none' }}></Grid>
            <Grid item xs={11.5} sm={10} md={5.5}>
                <Box sx={{ p: 3, marginTop: '-2em' }}>
                    <Box
                        sx={{
                            borderBottom: '4px solid #830000',
                            display: 'block',
                            pb: 1,
                            mb: 2
                        }}
                    >
                        <Typography variant="h2" component="h1" gutterBottom sx={{ mt: 4, mb: 2 }}>
                            Radio
                        </Typography>
                    </Box>
                    <List>
                        <RadioPlayer radios={radioLists.listeA} />
                    </List>
                </Box>
            </Grid>
            <Grid item xs={0} sm={1} md={3} sx={{ bgcolor: 'none' }}></Grid>
        </Grid>
    );
}

export default RadioView;