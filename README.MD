# @techiediaries/ngx-jwtauth

This is an Angular 4.3+ library for attaching a JSON Web Token to each HttpClient requests .


## Demo 

You can find a [demo project in this repo](https://github.com/techiediaries/angular-jwtauth-demo)

An online simple [demo](https://www.techiediaries.com/demos/ngx-jwtauth/)


## Installation

To use ngx-jwtauth in your project, install it via npm:

```bash

$ npm install @techiediaries/ngx-jwtauth --save

```

## Usage

```xml

import { HttpClientModule } from '@angular/common/http';
import { JWTAuthModule } from '@techiediaries/ngx-jwtauth';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JWTAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```




## License

MIT © [Techiediaries](mailto:techiediaries9@gmail.com)
