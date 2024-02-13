# NgSsePoc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

Angular SSE Service

This project includes a service for handling Server-Sent Events (SSE) in an Angular application.
Installation

First, clone the repository to your local machine:

git clone https://github.com/yourusername/yourrepository.git

Then, navigate to the project directory and install the dependencies:

cd yourrepository
npm install

Usage

The SseService is used to establish a connection with a server using Server-Sent Events (SSE). It creates an EventSource with the provided URL, listens for messages from the server, and sends those messages to the observer. It also handles errors and ensures that the EventSource is closed when the observer is unsubscribed.

Here's an example of how to use the service:
## Code

```js
    // Subscribing to the SSE service
    this.sseSubscription = this._sseService.getServerEvents(url).subscribe((event) => {
      this.sseResponse += event.data; // append the data to the sseResponse string
      console.log(this.sseResponse)
    } );
   
```

In this example, the AppComponent subscribes to the server events and appends the incoming data to the sseResponse string.
Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
License

MIT

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
