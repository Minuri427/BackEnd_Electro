var db = require('../../database/databaseConnection');

/**
 * Add device data to main bill plan
 * @param {*} devicedataTOU data of devices
 * @returns 
 */
module.exports.AddSpEventDeviceTOU = (devicedataTOU, id) => {
    return new Promise(async (resolve, reject) => {

        var bill_id = devicedataTOU.bill_id
        var appliance = devicedataTOU.appliance
        var quantity = devicedataTOU.quantity
        var using_minutes_peak_time = devicedataTOU.using_minutes_peak_time
        var using_minutes_off_peak_time = devicedataTOU.using_minutes_off_peak_time
        var using_minutes_day_time = devicedataTOU.using_minutes_day_time
        var power = devicedataTOU.power
        var units_peak_time = devicedataTOU.units_peak_time
        var units_off_peak_time = devicedataTOU.units_off_peak_time
        var units_day_time = devicedataTOU.units_day_time
        var total_cost_TOU = devicedataTOU.total_cost_TOU
        var cost_peak_time = devicedataTOU.cost_peak_time
        var cost_off_peak_time = devicedataTOU.cost_off_peak_time
        var cost_day_time = devicedataTOU.cost_day_time
        var Cust_id = id
        var hPeak = devicedataTOU.hPeak
        var mPeak = devicedataTOU.mPeak
        var hOffPeak = devicedataTOU.hOffPeak
        var mOffPeak = devicedataTOU.mOffPeak
        var hDay = devicedataTOU.hDay
        var mDay = devicedataTOU.mDay
        var numberOfDays = devicedataTOU.numberOfDays


        var addSpEvDeviceTOUQuery = `INSERT INTO electric_device_special_event_tou 
        (bill_id, appliance, quantity, hPeak, mPeak, hOffPeak, mOffPeak, hDay, mDay, using_minutes_peak_time, using_minutes_off_peak_time, using_minutes_day_time, power, units_peak_time,
        units_off_peak_time, units_day_time, total_cost_TOU, cost_peak_time, cost_off_peak_time, cost_day_time,numberOfDays, Cust_id) 
        VALUES("${bill_id}","${appliance}","${quantity}","${hPeak}","${mPeak}","${hOffPeak}","${mOffPeak}","${hDay}","${mDay}","${using_minutes_peak_time}",
        "${using_minutes_off_peak_time}","${using_minutes_day_time}","${power}","${units_peak_time}",
        "${units_off_peak_time}","${units_day_time}","${total_cost_TOU}","${cost_peak_time}","${cost_off_peak_time}",
        "${cost_day_time}","${numberOfDays}","${Cust_id}");`;



        db.query(addSpEvDeviceTOUQuery, async function (error, result) {

            if (error) {
                console.log(error);

                reject({ status: false, mesg: "error inserting data" });
            } else {
                // console.log(result);

                resolve({ status: true, mesg: "successfully insert data" });

            }

        });
    });

}

module.exports.AddSpEventDeviceFixed = (devicedataFixed, id) => {
    return new Promise(async (resolve, reject) => {

        var bill_id = devicedataFixed.bill_id
        var appliance = devicedataFixed.appliance
        var quantity = devicedataFixed.quantity
        var using_minutes_fixed = devicedataFixed.using_minutes_fixed
        var power = devicedataFixed.power
        var total_units_fixed = devicedataFixed.total_units_fixed
        var Cust_id = id
        var hfixed = devicedataFixed.hfixed
        var mfixed = devicedataFixed.mfixed
        var numberOfDays = devicedataFixed.numberOfDays


        var addSpEvDeviceFixedQuery = `INSERT INTO electric_device_special_event_fixed 
        (bill_id, appliance, quantity, hfixed, mfixed, using_minutes_fixed, power, total_units_fixed,
        numberOfDays, Cust_id) 
        VALUES("${bill_id}","${appliance}","${quantity}","${hfixed}","${mfixed}","${using_minutes_fixed}",
        "${power}","${total_units_fixed}", "${numberOfDays}", "${Cust_id}");`;



        db.query(addSpEvDeviceFixedQuery, async function (error, result) {

            if (error) {
                console.log(error);

                reject({ status: false, mesg: "error inserting data" });
            } else {
                // console.log(result);

                resolve({ status: true, mesg: "successfully insert data" });

            }

        });
    });

}

