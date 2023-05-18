const getRandomRotationY = () => {
    const randomIndex = Math.floor(Math.random() * 4)// 0から3の乱数を生成
    const rotationYValues = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2]// 0°, 90°, 180°, 270°
    return rotationYValues[randomIndex]
}

export default getRandomRotationY