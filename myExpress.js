//import { CreateServer, IncomingMessage, ServerResponse } from 'http';
var http = require('http');
;
;
var myExpress = (function () {
    // Constructor
    function myExpress() {
        // Init Data
        this.routes = [];
        this._initialize();
    }
    // Method Private
    myExpress.prototype._initialize = function () {
        var _this = this;
        this.server = http.CreateServer(function (req, res) {
            var method = req.method, url = req.url;
            var requestedRoute = _this.routes.find(function (route) {
                if (route.method === method && route.path === url) {
                    return route;
                }
                return undefined;
            });
            if (requestedRoute) {
                requestedRoute.callback(req, res);
            }
            else {
                res.status(400).send('Bad Request');
                res.end();
            }
        });
    };
    myExpress.prototype._overrideReponse = function (res) {
        var json = function (item) {
            res.write(JSON.stringify(item));
            res.end();
        };
        var send = function (content) {
            res.write(content);
            res.end();
        };
        return { res: res, json: json, send: send };
    };
    myExpress.prototype._upper = function (str) {
        return str.toUpperCase();
    };
    myExpress.prototype._lower = function (str) {
        return str.toLowerCase();
    };
    // Routes HTTP
    // GET
    myExpress.prototype.get = function (path, callback) {
        this.routes.push({ method: "GET", path: path, callback: callback });
    };
    // DELETE
    myExpress.prototype.delete = function (path, callback) {
        this.routes.push({ method: "DELETE", path: path, callback: callback });
    };
    // PUT
    myExpress.prototype.put = function (path, callback) {
        this.routes.push({ method: "PUT", path: path, callback: callback });
    };
    // POST
    myExpress.prototype.post = function (path, callback) {
        this.routes.push({ method: "POST", path: path, callback: callback });
    };
    // ALL
    myExpress.prototype.all = function (path, callback) {
        this.routes.push({ method: "ALL", path: path, callback: callback });
    };
    // Listen
    myExpress.prototype.listen = function (port, callback) {
        this.server.listen(port, callback);
    };
    return myExpress;
})();
exports["default"] = function () { return new myExpress(); };
