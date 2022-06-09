// Code your solution in this file!
const returnFirstTwoDrivers = function (namesArr) {
    return namesArr.slice(0, 2);
}
const returnLastTwoDrivers = function (namesArr) {
    return namesArr.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (i) {
    return function (fare) {
       return i * fare;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, cb) {
    return cb(arrayOfDrivers)  
}
