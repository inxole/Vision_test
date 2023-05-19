import Box from "@mui/material/Box"
import { useRecoilState } from "recoil"
import { ScaleSize } from "./atoms"

//[4, 2.857, 2, 0.678, 0.392, 0.32, 0.285, 0.25, 0.214, 0.178]
export const Up_text = () => {
    const [scale,] = useRecoilState(ScaleSize)
    let eyesight = 0
    if (scale === 4) {
        eyesight = 0.05
    } else if (scale === 2.857) {
        eyesight = 0.07
    } else if (scale === 2) {
        eyesight = 0.1
    } else if (scale === 0.678) {
        eyesight = 0.3
    } else if (scale === 0.392) {
        eyesight = 0.5
    } else if (scale === 0.32) {
        eyesight = 0.6
    } else if (scale === 0.285) {
        eyesight = 0.7
    } else if (scale === 0.25) {
        eyesight = 0.8
    } else if (scale === 0.214) {
        eyesight = 0.9
    } else if (scale === 0.178) {
        eyesight = 1.0
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Box component="span" pt={5}>
                <div>現在のあなたの視力は {eyesight} です。</div>
            </Box>
        </div>
    )
}

export const Under_text = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Box component="span" pt={5}>
                <div>スマホを使用することを推奨します。</div>
                <div>画面から５０ｃｍ離れてください。</div>
            </Box>
        </div>
    )
}