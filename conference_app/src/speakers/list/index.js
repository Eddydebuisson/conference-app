

class SpeakerList {

    constructor(talkService){
        this.service = talkService;
    }

    render(idView){
        let speakers = this.service.findAllSpeakers().then(reqspeaker => {

        let speak = "<ul>" + reqspeaker.map(speaker => "<li><a href='/#speakers-list'>" + speaker.firstname +"</a></li>").join("") + "</ul>";

        document.getElementById(idView).innerHTML = speak;
        })
    }

}

export default SpeakerList;