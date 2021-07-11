var commonResponseService = require('../../service/responseService');
var userRegisterModel = require('../../model/authentication/userRegistationModel');
/**
 * user registation controller function
 * @param {*} request 
 * @param {*} response 
 */
async function createUser(request, response) {

    try {

        // console.log("inside userregisterController");

        var createUser = await userRegisterModel.createUserFunc(request.body);
        console.log(createUser);
        commonResponseService.responseWithData(response, createUser);
        console.log("createUser");


    } catch (error) {
        console.log(error);
        commonResponseService.errorWithMessage(response, "something went wrong");
    }
}

async function loginUser(request, response) {

    try {
        var loginUserStatus = await userRegisterModel.loginUserFunc(request.body);

        console.log("inside loginUser controller");
        console.log(loginUserStatus);
        // response.send(loginUserStatus);
        if (loginUserStatus.status) {
            commonResponseService.responseWithData(response, loginUserStatus.data);
        } else {
            commonResponseService.errorWithMessage(response, loginUserStatus.mesg);
        }


    } catch (error) {
        console.log(error);
        commonResponseService.errorWithMessage(response, "something went wrong");
    }
}

module.exports = { createUser, loginUser };