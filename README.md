# test_yuki

> A Vue.js project

TODO:
- use vuelidate to control form.
  - no empty fields (all mandatories)
  - Check email format with vuelidate (done with default html5)
  - Block submit if not OK.
- Add a way to no show all rows (pagination, more at the bottom of the page?)
- Use vue alert to show confirmation messages, for ex before delete a row.
- Adapt with the table to items size.
- Keep data in local storage to keep data when refresh the page.
- Keep in memory the orders params: when we add row, it will be better to turn to order list (by default, added to the end).
- Add icon to order by items and to choose asc or desc order.
- Responsive version?
- Write a good readMe

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
