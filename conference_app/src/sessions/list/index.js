

class SessionList {

    constructor(talkService){
        this.service = talkService;
    }

    render(idView){
        let speakers = this.service.findAllSessions().then(reqsSession => {

        let titles = "<ul>" + reqsSession.map(sessions => "<li><a href='#sessions-list>" + sessions.title + "</a></li>").join("") +"</ul>";

        document.getElementById(idView).innerHTML = titles;
        })
    }

    renderSessionById(idView,id){
        let speakers = this.service.findSessionById(id).then(reqsSession => {

        let titles = "<h2>" + reqsSession.map(sessions => sessions.title) +"</h2>";

        document.getElementById(idView).innerHTML = titles;
        })

    }


}

export default SessionList;