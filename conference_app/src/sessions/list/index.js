

class SessionList {

    constructor(talkService){
        this.service = talkService;
    }

    render(idView){
        let sessions = this.service.findAllSessions().then(reqsSession => {

        let titles = "<ul>" + reqsSession.map(sessions => `<li><a href="#sessions-list?id=${sessions.id}">` + sessions.title + "</a></li>").join("") +"</ul>";

        document.getElementById(idView).innerHTML = titles;
        })
    }

    renderSessionById(idView,id){
        let sessions = this.service.findSessionById(id).then(reqsSession => {

        let titles =  reqsSession.map(sessions =>"<h2>" +sessions.title+"</h2><p>" +sessions.desc +"</p>" +sessions.speakers.map( s => "<a href='#speakers-list?id="+s+"'> Présentateur :"+ s +" </a></br>").join('')+  " <div class='row'> <a class='btn btn-warning'>Mes Notes</a>   </div>").join("") ;
        
        document.getElementById(idView).innerHTML = titles;
        })

    }


}

export default SessionList;