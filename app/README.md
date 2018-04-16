# JavaScript Intive FDV Web app #

ReactJS Developer Test by [Intive FDV][1]

Author: [Francis Rodrigues][2]

## Screenshots ##

![Intive-FDV mobile landscape](./screenshots/mobile-landscape.png)

![Intive-FDV small tablet portrait](./screenshots/small-tablet-portrait.png)

![Intive-FDV small tablet landscape](./screenshots/small-tablet-landscape.png)

![Intive-FDV tablet landscape](./screenshots/tablet-landscape.png)

## Environments ##

* Web app using:
  * Thinking in Component Structure
  * Airbnb JavaScript, React/JSX Style Guide
  * ReactJS
  * EcmaScript 6
  * EcmaScript Lint
  * Jest test

## How to run in development machine ##

Running in a console using `npm start` or `yarn start` command:

```bash
~$ yarn start
```

The output for this command as below:

```bash
Compiled successfully!

You can now view js-fdv-exercise in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.0.104:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

## Using env variables ##

To run this web app using env variables create a `.dev.env` in the root project and type a API url:

```env
API_URL=http://localhost:5000/api/
```

## References ##

* [Pass eslint html-has-for with htmlFor in React][3]

## License ##

MIT

  [1]: http://intive-fdv.com/
  [2]: https://github.com/francisrod01/
  [3]: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
