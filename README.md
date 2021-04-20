# Angular 9+ Socket.IO with Authentication

This packagee works with socket.io 2, you should have version 2 on server side also 


## Install

Run `npm install SFVII/ng-socket-io` 

## Configuration

All of default socket-io options should be prefixed by `socket_

### this module allow authentication trigger , when you set options `auth` to `true`

````
import {Socket, SocketIoModule} from 'ng-socket-io';

...
@NgModule({
    declarations: [...],
     imports: [
        ...
        SocketIoModule.forRoot({
            url: environment.baseUrlSocket,
            socket_path: null,
            socket_transports: ['websocket'],
            socket_query: {},
            socket_reconnection: true,
            socket_reconnectionAttempts: Infinity,
            socket_reconnectionDelay: 1000,
            socket_reconnectionDelayMax: 5000,
            socket_randomizationFactor: 0.5,
            socket_timeout: 60000,
            socket_autoConnect: true,
            socket_extraHeaders: {},
            auth: true,
            loginPage: '/login'
        })
        ...
    ],
    ...
    providers: [
        ...
        Socket,
        ...
    ]
    ...
})
````

## Disable authentication 

Just set `auth` to `false`, by default auth is set to false

## Enable authentication 

When the user is connected, please call  `this.socket.tokenUpdater.emit(<user_token>);`
that will build a query with the key token and send open connexion to socket with the given api

#### Use case 

```
    import {Socket} from 'ng-socket-io';
    ...
    export class LoginService {
        constructor(private socket : Socket, private api: ApiService) {}
        
        signIn(user, password) {
            const {userData, token} = this.ApiService.post('/login')
            if (token) {
                this.socket.tokenUpdater.emit(<user_token>);
            }
        }
    }
```

that will give you this kind of request : 
`wss://yourhost.com?token=<user_token>`
You have just to create a middleware into your backend socket.io APP 

## Room Management 

For join a room just call : 

```
 ...
 import {Socket} from 'ng-socket-io';
 ...
 export class YourComponent {
    constructor(private socket : Socket) {
        this.socket.subscribe('<your_room_name>');
    }
    ...
 }
```

this function can manage disconnect, and reconnect to your provided room automatically 
In your backend Socket.IO app just add 

socket.on('subscribe', (name) => socket.join(name));

Have fun dude, i will add some features soon and deploy a version for next version with more feature 

### Tips : 
* If you are using socket.io with redis adapter, disable upgrade in backend and increase timeout
