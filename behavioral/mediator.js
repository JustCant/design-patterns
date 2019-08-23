var Participant = function(name) {
    this.name = name;
    this.chatroom = null;
}

Participant.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function(message, from) {
        console.log(from.name + " to " + this.name + ": " + message);
    }
};

//MEDIATOR
var Chatroom = function() {
    var participants = {};

    return {
        register: function(participant) {
            participant[participant.name] = participant;
            participant.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                to.receive(message, from);
            } else{
                for(let key in participants) {
                    if(participants[key] !== from) {
                        participants[key].receive(message, from);
                    }
                }
            }
        }
    }
}

var beau = new Participant("Beau");
var quincy = new Participant("Quincy");
var rafael = new Participant("Rafael");
var berkeley = new Participant("Berkeley");
var everisto = new Participant("Everisto");

var chatroom = new Chatroom();
chatroom.register(beau);
chatroom.register(quincy);
chatroom.register(rafael);
chatroom.register(berkeley);
chatroom.register(everisto);

quincy.send("How's it going?");
beau.send("The YouTube channel is up to 1 million subscribers!", quincy);
rafael.send("The FCC wiki is more popular than Wikipedia!", quincy);
everisto.send("98% of our raduates got thei dream job", quincy);
berkeley.send("The government forked our repo and is now using it to create world peace!", quincy);