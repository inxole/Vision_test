import { atom } from "recoil";

export const ScaleSize = atom({ key: 'SS', default: 4 })
export const RandomRotation = atom({ key: 'RR', default: 0 })
export const CurrentAngle = atom({ key: 'CA', default: 0 })
export const ButtonDirection = atom({ key: 'BD', default: '' })