# Lesson 2

This lesson contains;
- created()
- v-for
- v-bind:src, v-bind:href
- v-on:click
- fetch json data
- array operation
    - array.splice(index,1) // remove
    - array.push(item) // append
- htpp server
- variable defination in a method

## created()
Each Vue instance goes through a series of initialization steps when it’s created - for example, it needs to set up data observation, compile the template, mount the instance to the DOM, and update the DOM when data changes. Along the way, it also runs functions called lifecycle hooks, giving users the opportunity to add their own code at specific stages.

For example, the created hook can be used to run code after an instance is created:

```javascript
new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.a)
  }
})
// => "a is: 1"
```

Example for Loading JSON
https://github.com/fatihacet/vuejs-videolari/blob/master/03-v-for/app.js

```javascript
window.addEventListener('load', () => {

  window.vue = new Vue({
    el: '#app',
    name: 'Cart',
    data: {
      isLoading: true,
      cart: [],
      saved: []
    },
    created() {
      fetch('./data.json')
        .then((res) => { return res.json() })
        .then((res) => {
          // isLoading set as false because json loaded.
          this.isLoading = false;
          this.cart = res.cart;
          this.saved = res.saved;
        })
    }
  })

});
```

## v-for
https://vuejs.org/v2/guide/list.html

Mapping an Array to Elements with v-for.
We can use the v-for directive to render a list of items based on an array. The v-for directive requires a special syntax in the form of item in items, where items is the source data array and item is an alias for the array element being iterated on:

```html
<ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>
```
app.js
```javascript
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```

### "(item, index) in items"

Inside v-for blocks we have full access to parent scope properties. v-for also supports an optional second argument for the index of the current item.
```html
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```

## v-bind:src, v-bind:href
Dynamically bind one or more attributes, or a component prop to an expression.

```html
<!-- bind an attribute -->
<img v-bind:src="imageSrc">

```

## v-on:click

https://vuejs.org/v2/api/#v-on

Attaches an event listener to the element. The event type is denoted by the argument. The expression can be a method name, an inline statement, or omitted if there are modifiers present.

```html
<!-- method handler -->
<button v-on:click="doThis"></button>
```

## Fetch
```javascript
window.addEventListener('load', () => {

  window.vue = new Vue({
    el: '#app',
    name: 'Cart',
    data: {
      isLoading: true,
      cart: [],
      saved: []
    },
    created() {
      fetch('./data.json')
        .then((res) => { return res.json() })
        .then((res) => {
          // isLoading set as false because json loaded.
          this.isLoading = false;
          this.cart = res.cart;
          this.saved = res.saved;
        })
    }
  })

});
```

## Variable Defination
To use variables outside Vue instance scope, you have to created either a method/data prop or computed prop because inside Vue template you can only use VueJS properties.

*keyword is const to define variable.

```javascript
const globalVar = 'global variable'; // not visible to template

new Vue({
    data() {
        vueProp: 'vue variable' // visible to template
    }
});
```

## Simple HTTPServer
you can use python simple server for HTTP serving
python -m SimpleHTTPServer 8000
Python 2.7.16 (default, Dec 13 2019, 18:00:32) 
