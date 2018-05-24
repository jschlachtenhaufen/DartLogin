chrome.storage.sync.get(['netId', 'netPassword', 'pause'], function(data) {
    if (data.pause)
        return;

    if (isErrorMessage())
        return;

    let netId = data.netId;
    let netPassword = data.netPassword;
    let inputFound = false;

    let userInputIds = ['username', 'userid'];
    let passwordInputIds = ['password', 'pwd', 'Bharosa_Password_PadDataField'];

    let userInputs = [];
    let passwordInputs = [];

    for (let i=0; i<userInputIds.length; i++)
        userInputs.push(document.getElementById(userInputIds[i]));

    for (let i=0; i<passwordInputIds.length; i++)
        passwordInputs.push(document.getElementById(passwordInputIds[i]));
    
    for (let i=0; i<userInputs.length; i++)
        if (userInputs[i]) {
            userInputs[i].value = netId;
            inputFound = true;
        }

    for (let i=0; i<passwordInputs.length; i++)
        if (passwordInputs[i]) {
            passwordInputs[i].value = netPassword;
            inputFound = true;
        }
    
    if (inputFound) {
        let form = document.getElementsByTagName("FORM")[0];
        form.onsubmit = function() {
            console.log("HEY");
            // can we get a callback?
        }
        form.submit();
    }
});

function isErrorMessage() {
    let badIds = ['errorMessage']
    for (let i=0; i<badIds.length; i++)
        if (document.getElementById(badIds[i]))
            return true;
    return false;
}
