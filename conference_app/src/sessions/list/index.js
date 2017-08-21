

class SessionList {

    constructor(talkService){
        this.service = talkService;
    }

    render(idView){
        let speakers = this.service.findAllSessions().then(reqsSession => {

        let titles = reqsSession.map(sessions => sessions.title);

        document.getElementById(idView).innerHTML = titles;
        })
    }

}

export default SessionList;