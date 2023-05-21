import Box from "@mui/material/Box"
import { useRecoilState, useRecoilValue } from "recoil"
import { EyesightSelector } from "./selector"
// import Grid from "@mui/material/Grid"

export const Up_text = () => {
    const eyesight = useRecoilValue(EyesightSelector)

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Box component="span" pt={5}>
                <div>現在の視力は  <span style={{ fontSize: '25px', color: 'red' }}>{eyesight}</span>  です。</div>
            </Box>
        </div>
    )
}

export const Under_text = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Box component="span" pt={5}>
                <div>画面から５０ｃｍ離れてください。</div>
            </Box>
        </div>
    )
}