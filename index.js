// Code your solution in this file

const drivers =["Antonia",'Nuru','Amari','Mo']
const returnFirstTwoDrivers=()=>{
    const newDriverArray=drivers.slice(0,2)
    return newDriverArray
}
const returnLastTwoDrivers=()=>{
    const newDriverArray=drivers.slice(-2)
    return newDriverArray


}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier(multiplier){

    return(fare)=>fare*multiplier
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
function selectDifferentDrivers(drivers,driverSelection){
    if (driverSelection===returnFirstTwoDrivers){
        return drivers.slice(0,2)
    }else if (driverSelection===returnLastTwoDrivers){
        return drivers.slice(-2)
    }
}