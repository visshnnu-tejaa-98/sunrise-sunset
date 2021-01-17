let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let ten = document.getElementById("ten")
let heading = document.getElementById("heading-dynamic")
console.log(heading)

let dropdown = document.getElementById("exampleFormControlSelect1")
let button = document.getElementById("search-search-btn")
console.log(dropdown)
async function getData(){
    let apiResponse = await fetch(`https://restcountries.eu/rest/v2/all`)
    let apiData = await apiResponse.json()
    for(let i=0;i<apiData.length;i++){
        let option = document.createElement("option")
        option.innerHTML = apiData[i].name
        option.value = apiData[i].name
        dropdown.append(option)
    }
}
getData()

button.addEventListener("click",function(e){
    e.preventDefault()
    async function getData(){
        let input = dropdown.value
        let apiResponse = await fetch(`https://restcountries.eu/rest/v2/all`)
        let apiData = await apiResponse.json()
        let countryData = apiData.filter(c=>c.name===input)
        console.log(countryData)
        let lat = countryData[0].latlng[0]
        let lng = countryData[0].latlng[1]
        console.log(lat,lng)
        console.log(countryData[0].latlng)
        let sunResponse = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`)
        let sunData = await sunResponse.json()
        console.log(sunData)
        heading.innerHTML = `for ${dropdown.value}`
        one.innerHTML = `${sunData.results.astronomical_twilight_begin}`
        two.innerHTML = `${sunData.results.astronomical_twilight_end}`
        three.innerHTML = `${sunData.results.civil_twilight_begin}`
        four.innerHTML = `${sunData.results.civil_twilight_end}`
        five.innerHTML = `${sunData.results.day_length}`
        six.innerHTML = `${sunData.results.nautical_twilight_begin}`
        seven.innerHTML = `${sunData.results.nautical_twilight_end}`
        eight.innerHTML = `${sunData.results.solar_noon}`
        nine.innerHTML = `${sunData.results.sunrise}`
        ten.innerHTML = `${sunData.results.sunset}`
    }
    getData()
    
})