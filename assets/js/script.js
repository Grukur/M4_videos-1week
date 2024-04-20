let loadVideo = (()=>{
    let loadPrivate = (id, url)=>{
        document.getElementById(id).setAttribute('src',url);
    };
    return {
        showAll: (id, url)=>{
            loadPrivate(id, url);
        }
    }
})();

class Multimedia{
    #url
    constructor(url){
        this.#url = url;
    }
    getUrl(){
        return this.#url;
    }

    setInicio (){
        alert('Este método es para realizar un cambio en la URL del video.')
    }
}


class Reproductor extends Multimedia{
    constructor(id, url){
        super(url);
        this.id = id;
    }

    playMultimedia(){
        loadVideo.showAll(this.id, this.getUrl())
    }

    setInicioRep(tiempo){
        let newUrl = this.getUrl() + `?start=${tiempo}`;
        loadVideo.showAll(this.id, newUrl)
    }

}

let musica = new Reproductor('musica','https://www.youtube.com/embed/rrGMENN1iaY');
musica.setInicioRep(30);

let peliculas = new Reproductor('peliculas','https://www.youtube.com/embed/rrGMENN1iaY');
peliculas.playMultimedia();
peliculas.setInicio()

let series = new Reproductor('series','https://www.youtube.com/embed/rrGMENN1iaY');
series.playMultimedia();