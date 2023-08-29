# KintoneDemo

## Documentation
Default plugin structure:

`src/`

    `css/`
    - `customize.css` // Stylesheet for desktop view
    - `config.css` // Stylesheet for Plug-in Settings

    `html/`
    - `config.html` / /HTML for Plug-in Settings

    `image/`
    - `icon.png` // Plug-in Icon
    
    `js/`
    - `customize.js` // App customization for Desktop
    - `mobile-customize.js` // App customization for Mobile
    - `config.js` // JavaScript initiated on Plug-in Settings

    `manifest.json`

## Log
### 8.27.23 
* Made kintone app
* got api key?
* postman calls :check:
* javascript hello world
    * + basic api calls
* looked at kintone api documentation
    * rest api
    * javascript api :eyes:
* looked at intro to plug-in development guide
    * kintone documentation is bad `:)`
    * installed kinton [plugin-packer](https://kintone.dev/en/plugins/plug-in-tool-guides/package-plug-in-files-using-plugin-packer/)
        * useful commands:
            * `kintone-plugin-packer src` (first time per plug-in)
            * `kintone-plugin-packer --ppk <generated .ppk file name> src`
* sucessfully uploaded (dummy) plug-in

### 8.28.23
* figured out api calls, async functions, and async calls
* merging cli test with plug-in infrastructure
* the 'cancell' typo in plug-in settings :') 

## Questions
* are we making Javascript/CSS files for Customizing an App? ==> plug-ins?
* how are apps tested?
    * through console?