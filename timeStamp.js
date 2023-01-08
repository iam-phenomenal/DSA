function timeStamp(date = null){
    let unix, utc
    if(date === null){
        unix = Math.floor(new Date())
        utc = new Date().toUTCString()
        return `${unix} ${utc}`
    }else{
        date = verifyDate(date)
        unix = Math.floor(new Date(date))
        utc = new Date(date).toUTCString()
        if(utc != "Invalid Date" && unix != "NaN"){
            return `${unix} ${utc}`
        }else{
            return "error"
        }
    }
}

function verifyDate(date){
    let pattern = /^\d+$/g
    let result = pattern.test(date)
    if(result){
        date = parseInt(date)
    }
    return date
}

//Test
let testDate = 123478
console.log(timeStamp())