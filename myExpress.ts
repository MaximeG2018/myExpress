//import { CreateServer, IncomingMessage, ServerResponse } from 'http';
import * as http from 'http';
import * as fs from 'fs';

export interface Route {
  method: string,
  path: string,
  callback: Function
};

export interface MyHttpResponse {
  json: (item: any) => void
  send: (content: string) => void
};
​

class myExpress {

  // Init Data
  private routes: Route[] = [];
  private server: any;

  // Constructor
  constructor() {
    this._initialize();
  }

  // Method Private
  private _initialize() {
    this.server = http.CreateServer((req: http.IncomingMessage, res: http.ServerResponse) => {
      const { method, url } = req;
      const requestedRoute = this.routes.find((route): (Route | undefined) => {
        if (route.method === method && route.path === url) {
          return route;
        }
        return undefined;
      });
      if (requestedRoute) {
        requestedRoute.callback(req, res);
      }
      else {
        res.status(400).send('Bad Request')
        res.end();
      }
    })
  }

  private _overrideReponse(res: http.ServerResponse): MyHttpResponse {
    const json = (item: any): void => {
      res.write(JSON.stringify(item));
      res.end();
    }

    const send = (content: string): void => {
      res.write(content);
      res.end();
    }

    return { ...res, json, send }
  }

  private _upper(str: string): string {
    return str.toUpperCase()
  }

  private _lower(str: string): string {
    return str.toLowerCase()
  }

  // Routes HTTP
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

  // POST
  post(path: string, callback: Function): void {
    this.routes.push({ method: "POST", path, callback });
  }

  // ALL
  all(path: string, callback: Function): void {
    this.routes.push({ method: "ALL", path, callback })
  }

  // Listen
  listen(port: number, callback: () => void): void {
    this.server.listen(port, callback)
  }
}

export default () => new myExpress();
