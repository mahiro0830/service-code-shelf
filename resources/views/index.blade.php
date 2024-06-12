<!DOCTYPE html>
<html lang="{{ str_replace('_','-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <title>CodeShelf | プログラミング学習を支援するためのサービス「CodeShelf」</title>
    @viteReactRefresh
    @vite([
        'resources/scss/app.scss',
        'resources/ts/index.tsx',
    ])
</head>
<body>
    <div id="app"></div>
</body>
</html>
