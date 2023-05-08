import { Button, Box } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'
import Landolt_C from './Model/Landolt_C'
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

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
                        <Canvas>
                            <Suspense>
                                <group >
                                    <pointLight intensity={1} position={[0, 0, 100]} />
                                </group >
                                <Landolt_C rotation={[Math.PI / 2, 0, 0]} scale={3} />
                            </Suspense>
                        </Canvas>
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