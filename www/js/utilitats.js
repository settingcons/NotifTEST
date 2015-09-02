
String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};

function localStorageRun() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}



function localStorageSupport() {
    if ("localStorage" in window && window["localStorage"] != null)
        return true;
    else
        return false;
}

function phoneGapRun() {
    return(navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/));
}

function esIOS() {
    return(navigator.userAgent.match(/(iPhone|iPod|iPad)/));
}

function mensaje(msg,titulo) {
    if(phoneGapRun())
        navigator.notification.alert(msg, null, titulo);
    else
        alert(msg);

}



