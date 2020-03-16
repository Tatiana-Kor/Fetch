window.API = {
    onFormSubmit: function(params, callbackSuccess, callbackFailed) {

        console.groupCollapsed ('onFormSubmit');
        console.log(params);
        console.groupEnd();

        setTimeout(function() {
            
            var serverResponseSuccess = true;

            if(serverResponseSuccess) {
                callbackSuccess();
            } else {
                callbackFailed(errors);
            }
        }, 500);
    },
};