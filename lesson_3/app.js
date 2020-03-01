window.addEventListener("load", () => {
    window.vue = new Vue({
        el: "#app",
        data: {
            team_name: "",
            member_list: [],
            is_json_loaded: false,
            total:0
        },
        created: function(){
            fetch('./data/teams.json')
            .then((res) => { return res.json() })
            .then((res) => {
                this.is_json_loaded = true
                this.member_list = res.team.members
                this.team_name = res.team.name
            })
        },
        computed: {
            totalScore(){
                let total=0;
                this.member_list.forEach(element => {
                    total += parseInt(element.score)
                });
                this.total = total
                return total;

            },
            knowledgeMean(){
                let mean = this.total / this.member_list.length;
                return mean.toFixed(2);
            }
        },
        methods: {
            orderedItems() {
                this.member_list = this.member_list.sort(
                    (a,b) => (parseInt(a.score) > parseInt(b.score)) ? -1:1);
            }
        }

    })
})