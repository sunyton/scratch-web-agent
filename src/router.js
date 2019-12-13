const Response = require("./response")
const ROUTER = require("./const").ROUTER
const SerialPort = require("./platforms/serialport/serialport")

class router {


    reflect (type) {
        switch (type) {
            case ROUTER.CONNECT_TYPE.SERIALPORT:
                return SerialPort;
        
            default:
                break;
        }
    }

    
    dispatch (socket, requestId, data) {
        const response = new Response(socket, requestId);
        try {
            const request = new Request(data);
            response.messageBody.connectType = request.body.connectType;
            response.messageBody.method = request.body.cmd;
            response.messageBody.connectName = request.getOptions().hasOwnProperty("port") ? request.getOptions().port : undefined;
            this.reflect(response.messageBody.connectType).executeCmd()
        } catch (error) {
            
        }
    }
}