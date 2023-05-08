import { Button, Box } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'

const Vision = () => {

    return (
        // 中央揃え
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* <Box></Box> */}
            <Grid container spacing={1}>
                <Grid>
                    <Grid xs={12}>
                        <Button>{'⇧'}</Button>
                    </Grid>
                    <Grid xs={6}>
                        <Button>{'⇦'}</Button>
                        <Button>{'⇨'}</Button>
                    </Grid>
                    <Grid xs={12}>
                        <Button>{'⇩'}</Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Vision