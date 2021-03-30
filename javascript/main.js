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
        orderSelection : '',
    },

    mounted() {
        axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(result => {
            result.data.response.forEach(element => {
                this.myDiscs.push(element);
                if (!this.myGenres.includes(element.genre)) {
                    this.myGenres.push(element.genre)
                }
            });
        })
    },

    methods : {
        selection(index) {
            if (this.myDiscs[index].genre === this.selectedValue || this.selectedValue === 'All albums') return true;
        },
        sortByYear() {
            this.myDiscs.sort((a, b) => a.year - b.year)
        },
        reloadPage() {
            location.reload();
        }
    }
})





