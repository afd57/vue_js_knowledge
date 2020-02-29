window.addEventListener("load", () => {
    window.vue = new Vue({
        el:"#app",
        data:{
            players:[],
            players_read:[]

        },created: function () {
            fetch('./data/german-players.json')
            .then((res) => { return res.json() })
            .then((res) => {
                this.players = res.sheets.Players
                console.log(this.players)
            })
          },
        methods:{
            moveToRead(index){
                console.log("move to player")
                console.log(index)
                const player = this.players.splice(index, 1);
                console.log(player)
                
                
                this.players_read.push(player[0])
            }
        }
        
    })
})