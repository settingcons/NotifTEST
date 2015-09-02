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
    receivedEvent: function(id) {
        deviceReady();
    }
};

function deviceReady() {
    try{
        window.plugin.notification.local.onadd = function (id, state, json) {
            mensaje(id,'EVENTO onadd');
        };

        window.plugin.notification.local.ontrigger = function (id, state, json) {
            mensaje(id,'EVENTO ontrigger');
        };

        window.plugin.notification.local.oncancel = function (id, state, json) {
            mensaje(id,'EVENTO oncancel');
        };

        window.plugin.notification.local.onclick = function (id, state, json) {
            try
            {
                mensaje(id+"\n"+ JSON.parse(json).test,'EVENTO onclick');
            }
            catch (ex){mensaje(id,'EVENTO onclick');}
        }
    }
    catch (ex){mensaje(ex.message,'ERROR en deviceReady');}
}

function metodo_hasPermission() {
    try{
    }
    catch (ex){mensaje(ex.message,'ERROR en metodo_hasPermission');}
}

function metodo_promptForPermission() {
    try{
    }
    catch (ex){mensaje(ex.message,'ERROR en metodo_promptForPermission');}
}

function metodo_add(p_id) {
    try{
        var now = new Date().getTime();
        _10_seconds_from_now = new Date(now + 10*1000);

        window.plugin.notification.local.add({
            id:      p_id,
            title:   'Notificación 1',
            message: 'Vas a funcionar?.',
            repeat:  5,
            date:    _10_seconds_from_now
        });
    }
    catch (ex){mensaje(ex.message,'ERROR en metodo_add');}
}

function metodo_add_autoCancel(p_id) {
    try{
        var now = new Date().getTime();
        _10_seconds_from_now = new Date(now + 10*1000);

        window.plugin.notification.local.add({
            id:      p_id,
            title:   'Notificación 3',
            message: 'Vas a funcionar?.',
            repeat:  5,
            autoCancel: true,
            date:    _10_seconds_from_now
        });
    }
    catch (ex){mensaje(ex.message,'ERROR en metodo_add_autoCancel');}
}

function metodo_add_simple(p_id) {
    try{
        var now = new Date().getTime();
        _10_seconds_from_now = new Date(now + 10*1000);

        window.plugin.notification.local.add({
            id:      p_id,
            title:   'Notificación 2',
            message: 'Vas a funcionar?.',
            date:    _10_seconds_from_now,
            json:       JSON.stringify({ test: 222 })
        });
    }
    catch (ex){mensaje(ex.message,'ERROR en metodo_add_simple');}
}

function metodo_cancel(p_id) {
    try{
        window.plugin.notification.local.cancel(p_id);
    }
    catch (ex){mensaje(ex.message,'ERROR en metodo_cancel');}
}

function metodo_cancelAll() {
    try{
        window.plugin.notification.local.cancelAll();
    }
    catch (ex){mensaje(ex.message,'ERROR en metodo_cancelAll');}
}

function metodo_isScheduled() {
    try{
    }
    catch (ex){mensaje(ex.message,'ERROR en metodo_isScheduled');}
}

function metodo_getScheduledIds() {
    try{
    }
    catch (ex){mensaje(ex.message,'ERROR en metodo_getScheduledIds');}
}

function metodo_getDefaults() {
    try{
    }
    catch (ex){mensaje(ex.message,'ERROR en metodo_getDefaults');}
}