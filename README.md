# chess-stats

Display your online chess stats on the web.
(still under development pls ignore ty)

## Get started

Install the dependencies...

```bash
cd chess-stats
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## To do

- [x] Add lichess statistics

- [x] Add a way to type-hint the data being parsed

- [ ] Add more stuff in this repo

  - [x] License
  - [ ] Proper README
  - [ ] Github Pages Deployment

- [ ] Style-it up!

  - [ ] Add CSS
  - [ ] Make chess stats their own component
  - [ ] Better loading screen

## License

This project is under the [MIT License](/LICENSE)

The [favicon used for the site](https://github.com/twitter/twemoji/blob/master/assets/72x72/265f.png) is made by [Twitter](https://github.com/twitter) and is licensed under [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)
