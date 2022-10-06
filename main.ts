input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showIcon(IconNames.SmallHeart)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.Happy)
})
