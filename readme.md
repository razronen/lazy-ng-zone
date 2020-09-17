
## What does this package do?


Use this package to **postpone zone.js download and bootstrap** until the moment you chose to do so.

The download & bootstrap of zone takes precious time in application bootstrap.
Since Angular bootstrap is independent of zone, there's no reason to have its dependency in bootstrap.




## How to use this package?

`npm install --save-dev ng-lazy-zone`

1. Add this provider in your **AppModule**:

    (e.g - here we download & bootstrap zone after 10 seconds)

    `{ provide: NgZone, useValue: LazyNgZone.LazyNgZone.create(timer(10000)) }`

2. Add ngZone option in **main.ts**:
 
    ```
    platformBrowserDynamic().bootstrapModule(AppModule, {
        ngZone: LazyNgZone.LazyNgZone.get
    })
    ```

3. Comment this line in **polyfills.ts**:

    `// import 'zone.js/dist/zone';  // Included with Angular CLI.`



For any issues,
Please contant me in razronen1@gmail.com.
Thanks!