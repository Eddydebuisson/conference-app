import TalkService from './common/talk.service';
import Layout from './layout/index'
import SpeakerList from './speakers/list/index'
import SessionList from './sessions/list/index'

let service = new TalkService();
//crée une instance de speakerlist avec l'instance de Talkservice
let speaker = new SpeakerList(service);
let sessions = new SessionList(service);

service.findAllSpeakers().then(reqspeaker => {

    reqspeaker.map(speaker => speaker.firstname).forEach(s => { console.log(s) });
});

let layout = new Layout();

layout.render();


var router = () => {
    if (location.hash == '#speakers-list') {
        // insere dans la balise main-view la liste de prénom
        speaker.render('main-view');
    } else if (location.hash == '#sessions-list') {
        sessions.render('main-view');
    } else {
        
    }
}
window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
    router();
});