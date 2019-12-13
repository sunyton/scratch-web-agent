class Request {

    constructor (data) {
        this.verify(data)
        this.body = data
    }

    verify (data) {
        if (!data.hasOwnProperty("connectType"))
              throw new Error("Missing 'connectType'.");
            if (!data.hasOwnProperty("cmd")) throw new Error("Missing 'cmd'.");
    }

    getParams () {
        return this.body.hasOwnProperty("params") ? this.body.params : {};
    }

    getOptions () {
        return this.getParams().hasOwnProperty("options") ? this.getParams().hasOwnProperty("options") : {};
    }
}

module.exports = Request