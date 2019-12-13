class Response {

    constructor (socket, messageId) {
        this.messageId = messageId;
        this.io = socket;
        this.messageBody = {
            connectType: "",
            method: "",
            error: null,
            connectName: "",
            data: {}
        }
    }

    


}

module.exports = Response