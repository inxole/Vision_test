import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Landolt_C from './Model/Landolt_C'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import { useRecoilState } from 'recoil'
import { RandomRotation, ScaleSize } from './atoms'
import getRandomRotationY from './function'

const Vision = () => {
    const [scale, setScale] = useRecoilState(ScaleSize)
    const [rotationY, setRotationY] = useRecoilState(RandomRotation)
    const scaleValues = [4, 3, 2, 0.7, 0.5, 0.4, 0.3, 0.2, 0.1]
    const currentIndex = scaleValues.indexOf(scale)

    const Click_Button = (n: string) => {
        const R_X = getRandomRotationY()
        if (scale == 0.1) {
            setScale(4)
            setRotationY(getRandomRotationY())
        } else if (scale > 0.1) {
            if (rotationY == 0 && n == 'right' ||
                rotationY == Math.PI / 2 && n == 'up' ||
                rotationY == Math.PI && n == 'left' ||
                rotationY == (3 * Math.PI) / 2 && n == 'down'
            ) {
                setScale(scaleValues[currentIndex + 1])
                setRotationY(R_X)
                setRotationY((x) => { return x })
            }
        }
    }

    useEffect(() => {
        setRotationY(getRandomRotationY())
    }, [])

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Expression produces a union type that is too complex to represent. */}
            <Box component="span" pt={30}>
                <Grid container spacing={1} direction={'column'} >{/* direction={'column'}で中央寄せに */}
                    <Grid container spacing={2} >
                        <Grid xs={4}>
                            <canvas aria-hidden width={50} height={60}></canvas>
                        </Grid>
                        <Grid xs={4}>
                            <Button variant="contained" size="large" style={{ width: '50px', height: '60px' }} onClick={() => { Click_Button('up') }}>{'⇧'}</Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} >
                        <Grid xs={4}>
                            <Button variant="contained" size="large" style={{ width: '50px', height: '60px' }} onClick={() => { Click_Button('left') }}>{'⇦'}</Button>
                        </Grid>
                        <Grid xs={4}>
                            <canvas aria-hidden width={50} height={60}></canvas>
                        </Grid>
                        <Grid xs={4}>
                            <Button variant="contained" size="large" style={{ width: '50px', height: '60px' }} onClick={() => { Click_Button('right') }}>{'⇨'}</Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} >
                        <Grid xs={4}>
                            <canvas aria-hidden width={50} height={60}></canvas>
                        </Grid>
                        <Grid xs={4}>
                            <Button variant="contained" size="large" style={{ width: '50px', height: '60px' }} onClick={() => { Click_Button('down') }}>{'⇩'}</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export const Landolt_C_view = () => {
    const [scale,] = useRecoilState(ScaleSize)
    const [rotationY,] = useRecoilState(RandomRotation)

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Box component="span" pt={20}>
                <Grid container spacing={1} >
                    <Canvas style={{ width: `110px`, height: `110px`, display: 'flex', justifyContent: 'center' }}>
                        <Suspense>
                            <PerspectiveCamera makeDefault={true} position={[0, 0, 10]} />
                            <pointLight intensity={1} position={[0, 0, 100]} />
                            <Landolt_C rotation={[Math.PI / 2, rotationY, 0]} scale={scale} />
                        </Suspense>
                    </Canvas>
                </Grid>
            </Box>
        </div>
    )
}

export default Vision

// 実寸    視力1.0 canvas style 55px Landolt_C scale 4
// 実寸    視力0.5 canvas style 275px Landolt_C scale 4
// iPhone 視力1.0 canvas style 5.5px
// iPhone 視力0.1 canvas style 55px
// iPhone 視力0.09 canvas style 66px
// iPhone 視力0.08 canvas style 77px
// iPhone 視力0.07 canvas style 88px
// iPhone 視力0.06 canvas style 99px
// iPhone 視力0.05 canvas style 110px(初期値)