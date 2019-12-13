class Channel {

    constructor () {
        this.channelHandleMap = {};
        this.channelPlatformsConnectHandleMap = {};
    }

    push (socket) {
        this.channelHandleMap[socket.id] = socket;
        this.channelPlatformsConnectHandleMap[socket.id] = {};
    }

    pop () {
        
    }

    withPlatformsConnet () {

    }

    untiePlatformsConnect () {

    }

    getChannelByConnectIdDo () {

    }

    platformsGC () {

    }
}