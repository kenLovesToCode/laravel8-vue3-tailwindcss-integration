## Laravel 8 + Vue 3 + Tailwindcss v3 Integration

This is a boilerplate of the integration of Laravel 8, Vue.js 3 and Tailwindcss

### Clone and run

`git clone https://github.com/kenLovesToCode/laravel8-vue3-tailwindcss-integration.git`

`yarn`

`yarn run hot`

### Guide

_Make sure to download composer and nodejs first_
_I used yarn so you can install yarn by `npm i --global yarn`_

1. run `composer create-project --prefer-dist laravel/laravel yourapp`
2. run `yarn add -D vue@next @vue/compiler-sfc vue-loader@next`
3. modify `welcome.blade.php` and add css and js
4. modify `app.js` and mount app
5. create a sample component `Home.vue` to test if working
6. import the `Home.vue` to `app.js` and modify `const app = createApp({ components: { Home } });`
7. add `<home />` inside the body of `welcome.blade.php`
8. modify `webpack.mix.js`
9. run `yarn` to install dependencies
10. run `yarn run hot`
11. open <https://tailwindcss.com/docs/guides/laravel> and copy the guide
12. run `yarn run watch`
13. some modifications of Home.vue, add chitchat from tailwindcss . com

