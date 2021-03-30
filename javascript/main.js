// `

/*
Descrizione: Attraverso una chiamata ajax all’API di boolean https://flynn.boolean.careers/exercises/api/array/music avremo a disposizione una decina di dischi musicali. Utilizzando vue, stampiamo a schermo una card per ogni album.
BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
BONUS 2: Ordinare i dischi per anno di uscita.
*/


Vue.config.devtools = true;
const app = new Vue({
    el : '#root',
    data : {
        myDiscs : [],
        myGenres : ['All albums'],
        selectedValue : 'All albums',
    },

    mounted() {
        axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(result => {
            result.data.response.forEach(element => {
                this.myDiscs.push(element);
            });
            result.data.response.forEach(element => {
                if (!this.myGenres.includes(element.genre)) {
                    this.myGenres.push(element.genre)
                }                
            })
        })
    },

    methods : {

    }
})





