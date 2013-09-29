function MyConnectionRequestListener() {
    this.onConnectDone = function (result) {
        if (result != resultcode_success) {
            alert('connection lost due to inactivity :'  + result);
        }
        alert("Connected!");
        WarpClient.joinRoom("1932964503"); // Trying to join a Room
    };

    this.onDisconnectDone = function (result) {
    	alert("disconnected!");
    };
}


function MyRoomRequestListener() {
	
    this.onSubscribeRoomDone = function (event) {
        if (event.result == resultcode_success) {
            //document.getElementById("postJoin").style.display = "none";
                // inside jungle
                //current_loc_id = jungle_roomId;
                //document.getElementById("jungle_world").style.display = "block";
            //}
            WarpClient.getLiveRoomInfo("1932964503");
        }
    };
    this.onUnsubscribeRoomDone = function (event) {
        //$('#chatLog').append('<p>' + 'Unsubscribe room result ' + event.result + '</p>');
    };
    this.onJoinRoomDone = function (event) {
        if (event.result == resultcode_success) {
            WarpClient.subscribeRoom(event.roomdata.id);
        }
        else {
            alert('There are already 2 people playing. Try again later');
        }
    };
    this.onLeaveRoomDone = function (event) {
        $('#chatLog').append('<p>' + 'Leave room result ' + event.result + '</p>');
    };
    this.onGetLiveRoomInfoDone = function (event) {
        if (event.result == resultcode_success) {
		startgame();
           /* if (event.userNameArray.length == 2) {
                // I am robber
                current_role = role_robber;
                //var p1 = event.userNameArray[0];
                //var p2 = event.userNameArray[1];
                if (p1 === "pc") {
                    startgame("pc");
                }
                else {
                    startgame(p1);
                }
            }
            else {  */
                // I am police. wait for robber.
                //current_role = role_police;
                //document.getElementById('game_state').innerHTML = "You are the policeman. Waiting for robber to join.";
            //}
        }
    };
    this.onSetCustomRoomDataDone = function (event) {
        $('#chatLog').append('<p>' + 'Set Custom room data result ' + event.result + '</p>');
    };
    
    this.onUpdatePropertyDone = function(event){
    	
    }
    this.onLockPropertiesDone = function(event){
    	
    }
    
this.onUnlockPropertiesDone = function(event){
    	
    }
}

function MyChatRequestListener() {
    this.onSendChatDone = function (result) {
       // $('#chatLog').append('<p>' + 'Send Chat result ' + result + '</p>');
    };
    
    this.onSendPrivateChatDone = function (result) {
	    //console.log('');
	    }
}

function MyUpdateRequestListener() {
    this.onSendUpdateDone = function (result) {
       // $('#chatLog').append('<p>' + 'Send Update result ' + result + '</p>');
    };
}

function MyNotifyListener() {
    this.onRoomCreated = function (roomdata) {
        //$('#chatLog').append('<p>' + 'subscribe room ' + roomdata.id + '</p>');
    };
    this.onRoomDestroyed = function (roomdata) {
        //$('#chatLog').append('<p>' + 'Unsubscribe room ' + roomdata.id + '</p>');
    };
    this.onUserLeftRoom = function (roomdata, user) {
        if (user != local_username) {
            moveRemote(0, 0, "");
        }
    };
    this.onUserJoinedRoom = function (roomdata, user) {
        if (current_loc_id == roomdata.id) {
            // the game can start now!
            startgame(user);
        }
    };
    this.onUserLeftLobby = function (lobbydata, user) {
        //$('#chatLog').append('<p>' + 'user left lobby ' + user + '</p>');
    };
    this.onUserJoinedLobby = function (lobbydata, user) {
        //$('#chatLog').append('<p>' + 'user joined lobby' + user + '</p>');
    };
    this.onChatReceived = function (chatevent) {
        //$('#chatLog').append('<p>' + chatevent.sender + ' says ' + chatevent.chat + '</p>');
	    console.log('chat received : ' + chatevent.chat);
    };

    this.onUpdatePeersReceived = function (updateevent) {
        
    };
    
    this.onUserChangeRoomProperty = function (event, username,properties, lockTable){
	    };
   this.onPrivateChatReceived = function (){
	   }
}