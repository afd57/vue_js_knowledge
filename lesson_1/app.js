window.addEventListener('load', () => {
    console.log("Page Loaded")

    window.vue = new Vue({
      el: '#app',
      data: {
          message: 'Hello World!',
          xssTest: '<h1>Hello World! XSS Test</h1>',
          isDisplay: false

      }
    })

    window.vue2 = new Vue({
        el: '#app2',
        data: {
            name: "Aziz",
            message: 'Hello ',
            authorization: true

        }
      })
  
  })