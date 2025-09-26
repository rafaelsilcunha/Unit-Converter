const lengthConvert = document.getElementById("length-conversion")
const massConvert = document.getElementById("mass-conversion")
const volumeConvert = document.getElementById("volume-conversion")
const convertBtn = document.getElementById("convert-btn")

const feetToMeter = 0.3048
const meterToFeet = 3.28084
const literToGallon = 3.78541
const gallonToLiter = 0.264172 
const poundToKg = 0.453592 
const kgToPound = 2.20462

const userInput = document.getElementById("unit-input")


convertBtn.addEventListener("click", function () {
    let userInputValue = Number(userInput.value)
    lengthConvert.innerHTML = `
    ${userInputValue} meters = ${(userInputValue * meterToFeet).toFixed(3)} feet | ${userInputValue} feet = ${(userInputValue * feetToMeter).toFixed(3)} meters
    `
    volumeConvert.innerHTML = `
    ${userInputValue} liters = ${(userInputValue / literToGallon).toFixed(3)} gallons | ${userInputValue} gallons = ${(userInputValue / gallonToLiter).toFixed(3)} liters
    `
    massConvert.innerHTML = `
    ${userInputValue} kilos = ${(userInputValue * kgToPound).toFixed(3)} pounds | ${userInputValue} pounds = ${(userInputValue * poundToKg).toFixed(3)} kilos
    `
})