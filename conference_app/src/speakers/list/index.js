

class SpeakerList {

    constructor(talkService){
        this.service = talkService;
    }

    render(idView){
        let speakers = this.service.findAllSpeakers().then(reqspeaker => {

        let speak = "<ul>" + reqspeaker.map(speaker => `<li><a href="#speakers-list?id=${speaker.id}">` + speaker.firstname +" "+ speaker.lastname+"</a></li>").join("") + "</ul>";

        document.getElementById(idView).innerHTML = speak;
        })
    }

    renderSpeakersById(idView,id){
        let speakers = this.service.findSpeakersById(id).then(reqsSession => {

        let speak =  reqsSession.map(speaker =>"<h2>" +speaker.firstname +" " +speaker.lastname+"</h2><p>" +speaker.about +"</p>"+ speaker.socials.map( s => "<a href='"+s.link+"'>"+ s.class   +" </a></br>").join("") ).join("") ;
        
        document.getElementById(idView).innerHTML = speak;
        })

    }


}

export default SpeakerList;