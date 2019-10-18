let app = new Vue({
    el: '#app',
    data: {
        pokemon: {},
        pokeList: [],
        loading: false
    },
    methods: {
        async poke() {
            try {
                let rand = Math.floor(Math.random() * 200)
                if (rand === 0) {
                    rand = 1
                }
                const url = "https://pokeapi.co/api/v2/pokemon/" + rand
                this.loading = true
                const response = await axios.get(url)
                this.pokemon = response.data
                console.log(this.pokemon)
                this.pokeList.push(this.pokemon)
                console.log(this.pokeList)
                this.loading = false
            }
            catch (error) {
                this.number = this.max
            }
        },
        capitalize(str) {
            return (str).charAt(0).toUpperCase() + (str).substring(1)
        }
    },
    computed: {
        numGenerated() {
            return this.pokeList.length
        }
    }
});
