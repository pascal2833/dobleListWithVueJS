## test_yuki

Hi!

- Hope you will appreciate my work.
- Regarding to the general structure of the project, I used a vue-cli (not the last one).
  - I've done a bash to adapt this cli to my necessities: see https://github.com/pascal2833/personalCLI_4_Vue.js


Below a TODO list about some things that could be done to improve this job (I promise to return this work today
and I don't have the time right now to implements these part.):

#### TODO:
- use vuelidate to control error messages / form.
  - no empty fields (all mandatories)?
  - Check email format with vuelidate (done with default html5)
  - Submit button has to be disabled if not OK.
- Add a way to no show all rows (pagination, add a more at the bottom of the page?)
- Use vue alert to show confirmation messages, for ex before delete a row.
- Adapt table th and td to items size.
- Keep data in local storage to keep data when refresh the page.
- When we add a row, it will be better to turn to order list (by default, added to the end).
  - For that, we need to keep in memory the orders params.
- Add icon to order by items (in thead) and to choose asc or desc order.
- Improve testing part (I'm not really a specialist about testing so it's not so easy for me but I enjoyed this part!)

## Build Setup -> from vue CLI.

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
