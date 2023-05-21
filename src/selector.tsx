import { selector } from "recoil"
import { ScaleSize } from "./atoms"

export const EyesightSelector = selector({
    key: 'EyesightSelector',
    get: ({ get }) => {
        const scale = get(ScaleSize)
        let eyesight = 0
        switch (scale) {
            case 4.000: eyesight = 0.05; break;
            case 2.857: eyesight = 0.07; break;
            case 2.000: eyesight = 0.10; break;
            case 0.678: eyesight = 0.30; break;
            case 0.392: eyesight = 0.50; break;
            case 0.320: eyesight = 0.60; break;
            case 0.285: eyesight = 0.70; break;
            case 0.250: eyesight = 0.80; break;
            case 0.214: eyesight = 0.90; break;
            case 0.178: eyesight = 1.00; break;
            default: eyesight = 0; break
        }
        return eyesight
    }
})