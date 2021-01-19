<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">

        
        {{-- CSRF Token --}}
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Application</title>

        {{-- Fonts --}}
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500&display=swap" rel="stylesheet">

        {{-- font-awesome@4  --}}
        <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.x/css/font-awesome.min.css" rel="stylesheet">

        {{-- Vuetify --}}
        <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">

        <style>
            *{
                font-family: 'Tajawal', sans-serif;
                font-weight: bold
            }
                        
            #overlay-loading{
                z-index: 6;
                width: 100%;
                background: white;
                position: fixed;
                display: flex;
                height: 100%;
            }
            #overlay-loading div{
                margin: auto;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div id='app'> 
            <div v-if='loading'>
                <div id="overlay-loading">
                    <div >
                        <div class="sk-folding-cube">
                            Load Application........
                        </div>
                    </div>
                </div>
            </div>
            <App v-else></App> 
        </div>

        <script src="{{ mix('js/manifest.js') }}" async></script>
        <script src="{{ mix('js/vendor.js') }}" async></script>
        <script src="{{ mix('js/app.js') }}" async></script>
    </body>
</html>
