let value1 = undefined;
let value2 = undefined;
let selectedOperation = undefined;
let hasResult = false

let display = document.getElementById('display')

function writeDisplay(number) {
    if(hasResult) {
        display.value = ""
        hasResult = false
    }
    if(display.value.length <= 14) {
        display.value += number
    }
}

function operation(operation) {
    if (value1 == undefined) {
        value1 = (display.value == "" ? "0":display.value)
        selectedOperation = operation
        display.value = ""
    } else {
        value2 = (display.value == "" ? "0":display.value)
        value1 = getResult()
        selectedOperation = operation
        display.value = ""
    }
}

function clean() {
    display.value = ""
    value1 = undefined
    value2 = undefined
    selectedOperation = undefined
}

function result() {
    display.value = getResult()
    selectedOperation = undefined
}

function getResult() {
    let result = ""
    if(selectedOperation == undefined) {
        result = display.value
    } else {
        value2 = display.value
        value2 = (value2 == "" ? "0":value2)
        result = `${eval(`${value1} ${selectedOperation} ${value2}`)}`
        result = result.slice(0,16)
        value2 = undefined
        hasResult = true
    }
    return result
}