// const inputNumberEl = document.getElementById("input-number-el")
// const btnConvertEl = document.getElementById("convert-btn-el")
// const pLengthEl = document.getElementById("p-length-el")
// const pVolumeEl = document.getElementById("p-volume-el")
// const pMassEl = document.getElementById("p-mass-el")

function convert(number, metricUnit, imperialUnit){

    const feet = 3.28084 // 1 meter = 3.281 feet
    const gallon = 0.264172 // 1 liter = 0.264 gallon
    const pound = 2.20462 // 1 kilogram = 2.204 pound

    let metricValue = 0;
    let imperialValue = 0;

    if(metricUnit === "meter" && imperialUnit === "feet"){
        imperialValue = parseFloat((number * feet).toFixed(3))
        metricValue = parseFloat((number / feet).toFixed(3))

    }else if (metricUnit === "liter" && imperialUnit === "gallon"){
        imperialValue = parseFloat((number * gallon).toFixed(3))
        metricValue = parseFloat((number / gallon).toFixed(3))
    } else if(metricUnit === "kilogram" && imperialUnit === "pound"){
        imperialValue = parseFloat((number * pound).toFixed(3))
        metricValue = parseFloat((number / pound).toFixed(3))
    }

    return {metric: metricValue, imperial: imperialValue}
}