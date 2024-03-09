# ICDP-frontend

Welcome the ICDP frontend development environment.

## Requirements
To run this environment you need to install in your local machine:

- [node.js](https://nodejs.org/en/) (at least v.11.2)
- [npm](https://www.npmjs.com/get-npm)

## Installation

Clone this repo and install dependencies running in the main folder: 

```bash
$ npm install
```

### Prisma SQLite setup

Migrate schema to SQLite database

```bash
$ npx prisma migrate dev --name init
```

Upload data fixture to database (data are stored in: `./prisma/data/`)

```bash
$ npx prisma db seed
```

In order to drop database and upoload data fixture again, i.e. if you update the schema, run:

```bash
$ npx prisma migrate reset
```

Check database manager at `http://localhost:5555`:

```bash
$ npx prisma studio
```

For detailed explanation on how things work in the database, check out the [documentation](https://www.prisma.io/).

### Frontend build Setup

Serve the frontend with hot reload at `http://localhost:3000`:

```bash 
$ npm run dev
```

### Frontend deployment

Build for production and launch server

```bash
$ npm run build
$ npm run start
```

You can even generate a full static website with the following command:

```bash
$ npm run generate
```
To deploy a static generated site make sure you have target: `static` in your `nuxt.config.js`

```JS
export default {
  target: 'static'
}
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

### HTPP basic auth
Basic authentication is active if environment isn't the 'development' one. In a different environment, i.e. 'production', you have a username/password access with this values:

```
name: 'icdp'
pass: 'passwordsemplicedaricordare'
```

## Style

Style is based on **bootstrap-italia**, you can referer to the [documentation](https://italia.github.io/bootstrap-italia/) for any information you need.

Boostrap Italia is globally customized in these files:

- assets/scss/_color-variables.scss
- assets/scss/_customizer.scss
- assets/scss/_icon.scss

Component style can be found inside the component itself.

_Note:_ Icon use is different form the ones of Boostrap Italia. In the `assets/scss/_icon.scss` are called only the icon actually used and an equivalent class is made, icons are called in html mostly in this way: `<span class="icon icon-name" />`
