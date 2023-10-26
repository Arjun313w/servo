radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        for (let index = 0; index < 4; index++) {
            pins.servoWritePin(AnalogPin.P0, 45)
            basic.pause(1000)
            pins.servoWritePin(AnalogPin.P1, 45)
            basic.pause(1000)
            pins.servoWritePin(AnalogPin.P0, 120)
            basic.pause(1000)
            pins.servoWritePin(AnalogPin.P1, 120)
        }
        pins.servoWritePin(AnalogPin.P0, 68)
        pins.servoWritePin(AnalogPin.P1, 68)
    } else if (receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P1, 68)
        pins.servoWritePin(AnalogPin.P0, 68)
    } else if (receivedNumber == 2) {
        pins.servoWritePin(AnalogPin.P2, 50)
    } else if (receivedNumber == 3) {
        pins.servoWritePin(AnalogPin.P2, 120)
    } else {
        pins.servoWritePin(AnalogPin.P1, 68)
        pins.servoWritePin(AnalogPin.P1, 68)
    }
})
makerbit.onUltrasonicObjectDetected(10, DistanceUnit.CM, function () {
    for (let index = 0; index < 2; index++) {
        pins.servoWritePin(AnalogPin.P0, 45)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P1, 45)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P0, 120)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P1, 120)
    }
    pins.servoWritePin(AnalogPin.P0, 68)
    pins.servoWritePin(AnalogPin.P1, 68)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(3)
})
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P12, DigitalPin.P16)
