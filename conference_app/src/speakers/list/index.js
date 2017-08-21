

class SpeakerList {

    constructor(talkService){
        this.service = talkService;
    }

    render(idView){
        let speakers = this.service.findAllSpeakers().then(reqspeaker => {

        let speak = reqspeaker.map(speaker => speaker.firstname);

        document.getElementById(idView).innerHTML = speak;
        })
    }

}

export default SpeakerList;