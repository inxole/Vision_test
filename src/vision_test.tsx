import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import { useRecoilState } from 'recoil'
import { RandomRotation, ScaleSize } from './atoms'
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Landolt_C from './Model/Landolt_C'
import getRandomRotationY from './function'

const Vision = () => {
    const [scale, setScale] = useRecoilState(ScaleSize)
    const [rotationY, setRotationY] = useRecoilState(RandomRotation)
    const scaleValues = [4, 2.857, 2, 0.678, 0.392, 0.32, 0.285, 0.25, 0.214, 0.178]
    const currentIndex = scaleValues.indexOf(scale)

    const Click_Button = (n: string) => {
        const R_X = getRandomRotationY()
        if (rotationY == 0 && n == 'right' ||
            rotationY == Math.PI / 2 && n == 'up' ||
            rotationY == Math.PI && n == 'left' ||
            rotationY == (3 * Math.PI) / 2 && n == 'down'
        ) {
            if (scale == 0.178) {
                setScale(4)
                setRotationY(getRandomRotationY())
            } else if (scale > 0.178) {
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
            {/* Expression produces a union type that is too complex to represent. component="span"を追加して解決*/}
            <Box component="span" pt={15}>
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
            <Box component="span" pt={10}>
                <Grid container spacing={1} xs={12}>
                    <Canvas style={{ width: `224px`, height: `224px`, display: 'flex', justifyContent: 'center' }}>
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

//y=1.5/x y:ﾗﾝﾄﾞﾙﾄ環の隙間の大きさ(単位mm) 計px:mmをpxに変換した値 使px:実際に使用したpx x:視力 S:scale *:使用している箇所
// y:    30| 21.43|  15|   7.5|    5|  3.75|     3|  2.5| 2.14| 1.875| 1.67|  1.5|
// x:  0.05|  0.07| 0.1|   0.2|  0.3|   0.4|   0.5|  0.6|  0.7|   0.8|  0.9|  1.0|
//計px: 113|    80|  56| 28.35|18.90| 14.17| 11.34| 9.45| 8.09|  7.09| 6.31| 5.67|
//使px:*112|   *80| *56|    28|  *19|    14|   *11|   *9|   *8|    *7|   *6|   *5|
//   S:   4| 2.857|   2|     1|0.678|   0.5| 0.392| 0.32|0.285|  0.25|0.214|0.178|
// 参考URL1 (https://www.youtube.com/watch?v=u5_Q0H-dfGs)
// 参考URL2 (https://www.nidek.co.jp/eyestory/eye_5.html)
// 参考URL3 (https://www.nidek.co.jp/visitor_general/eyestory/entry-2440.html)