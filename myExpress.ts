import http from 'http';

interface Route {
    method: string,
    path: string,
    callback: Function
};

class myExpress {
  
    private routes: Route[] = [];
    private httpServer: (http.Server | null) = null;


    // GET
    get(path: string, callback: Function): void {
        this.routes.push({ method: "GET", path, callback });
    }

    // DELETE
    delete(path: string, callback: Function): void {
        this.routes.push({ method: "DELETE", path, callback });
    }

    // PUT
    put(path: string, callback: Function): void {
        this.routes.push({ method: "PUT", path, callback });
    }

    //POST
    post(path: string, callback: Function): void {
        this.routes.push({ method: "POST", path, callback });
    }

    //ALL
    all(path: string, callback: Function): void {
        this.routes.push({method: "ALL", path, callback})
    }

    public listen(port: number): void {
        this.httpServer = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
            const { method, url } = req;
            const requestedRoute = this.routes.find((route): (Route | undefined) => {
                if (route.method === method && route.path === url) {
                    return route;
                }
                return undefined;
            });
            if (requestedRoute) {
                requestedRoute.callback(req, res)
                }
            else {
                res.SendStatus(4OO) //  equivalent to res.status(404).send('Not Found')
                res.end();
            }
          })
      }
}


export default () => new myExpress();
