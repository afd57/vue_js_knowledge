# Lesson 1
This lesson contains; starting Vue.js and hello word example

## Installation
https://vuejs.org/v2/guide/installation.html

## Usefull Material
https://github.com/vuejs/awesome-vue  the git repo has a lot of useful material.

## Two way binding

Technically, Vue.js is focused on the ViewModel layer of the MVVM pattern. It connects the View and the Model via two way data bindings. 

what's two way binding?
if you connect a view with a model, when the model change view change also. 
when view is changed model change also.

![](../images/two_way_binding.png)

## Virtual DOM
https://vuejsdevelopers.com/2017/02/21/vue-js-virtual-dom/

## How to build a single-page application (SPA) with Vue.js?

SPA can be developed  with Router, StateManager, Ajax like stuff that plugins.

https://www.freecodecamp.org/news/how-to-build-an-spa-using-vue-js-vuex-vuetify-and-firebase-using-vue-router-fc5bd065fe18/

https://www.adcisolutions.com/knowledge/how-build-single-page-application-spa-vuejs

## Declarative Rendering

You can write data to html file by using "{{ }}"

## 1st lesson Topics

### v-if
If condition in vueJs. 
if condition is false, elements remove from dom tree.

### v-show 
If condition is false, element don't display in html.

### v-html
you set html to your data and you need to show the data as html, you need to you "v-html"

### v-text 
you get a information from user and you want to display it. You should use "v-text" instead of v-html