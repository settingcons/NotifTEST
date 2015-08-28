/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function() {
        deviceReady();
    }
};

function deviceReady() {

    document.addEventListener("backbutton", handleBackButton, false);


    try {
        cordova.plugins.notification.local.on('schedule', function (notification) {
            //console.log('onschedule', arguments);
            showToast('scheduled: ' + notification.id);
        });

        cordova.plugins.notification.local.on('update', function (notification) {
            //console.log('onupdate', arguments);
            showToast('updated: ' + notification.id);
        });

        cordova.plugins.notification.local.on('trigger', function (notification) {
            //console.log('ontrigger', arguments);
            showToast('triggered: ' + notification.id);
        });

        cordova.plugins.notification.local.on('click', function (notification) {
            //console.log('onclick', arguments);
            showToast('clicked: ' + notification.id);
        });

        cordova.plugins.notification.local.on('cancel', function (notification) {
            //console.log('oncancel', arguments);
            showToast('canceled: ' + notification.id);
        });

        cordova.plugins.notification.local.on('clear', function (notification) {
            //console.log('onclear', arguments);
            showToast('cleared: ' + notification.id);
        });

        cordova.plugins.notification.local.on('cancelall', function () {
            //console.log('oncancelall', arguments);
            showToast('canceled all');
        });

        cordova.plugins.notification.local.on('clearall', function () {
            //console.log('onclearall', arguments);
            showToast('cleared all');
        });

    }
    catch (ex){alert("deviceReady1: " +ex.message);}

    try {
        alert('deviceReady1');
        // Android customization
        cordova.plugins.backgroundMode.setDefaults({text: 'Doing heavy tasks.'});
        alert('deviceReady2');
        // Enable background mode
        cordova.plugins.backgroundMode.enable();

        alert('deviceReady3');
        // Called when background mode has been activated
        cordova.plugins.backgroundMode.onactivate = function () {
            alert('antes');
            setTimeout(function () {
                alert('funciona1???');
                // Modify the currently displayed notification
                cordova.plugins.backgroundMode.configure({
                    text: 'Running in background for more than 5s now.'
                });
                alert('funciona2???');
            }, 500);
            alert('después');
        };
        alert('deviceReady4');
        cordova.plugins.backgroundMode.onfailure = function(errorCode) {alert(errorCode.text)};
    }
    catch (ex){alert("deviceReady2: " +ex.message);}
}
function esIOS() {
    return(navigator.userAgent.match(/(iPhone|iPod|iPad)/));
}

function salir() {
    if (esIOS()) {

    }
    else {
        if (navigator.app) {
            navigator.app.exitApp();
        } else if (navigator.device) {
            navigator.device.exitApp();
        }
    }
}

function handleBackButton() {
    try {
        salir();
        //if ($.mobile.activePage.attr('id') == 'pageIndex') {
        //    salir();
        //}
        //else if ($.mobile.activePage.attr('id') == 'pageInicio') {
        //    salir();
        //}
        //else{
        //    if(esIOS())
        //    {
        //        window.history.back();
        //    }
        //    else {
        //        if (navigator.app) {
        //            navigator.app.backHistory();
        //        } else if (navigator.device) {
        //            navigator.device.backHistory();
        //        }
        //        else {
        //            window.history.back();
        //        }
        //    }
        //}
    }
    catch (ex) {
        alert("handleBackButton: " +ex.message);
    }
}
