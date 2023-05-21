# Mini React

## Preparation

Install vscode extentions.

- Jest (id: Orta.vscode-jest)
- Live Server (id: ritwickdey.LiveServer)
- Prettier (id: esbenp.prettier-vscode)

## Build

```shell
yarn build
```

## Run

Create html files in `dist/` and open them with Live Server.
For example, you can create index.html file to check if some functions in library can work fine in your browser.
Note that your functions or variables should be exported from `index.js`.

```html
<script src="./bundle.js"></script>

<script>
  let elem = MiniReact.createElement('div', null, 'index');
  console.log(elem);
</script>
<body></body>
```

## Test

Open Jest settings, test files, and run each test.
