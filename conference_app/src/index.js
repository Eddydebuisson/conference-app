import TalkService from './common/talk.service';
import Layout from './layout/index'
import SpeakerList from './speakers/list/index'
import SessionList from './sessions/list/index'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"
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
    let parent = location.hash.split("=");


    if (location.hash == '#speakers-list') {
        speaker.render('main-view');
    } else if (location.hash == '#sessions-list') {
        sessions.render('main-view');
    } else if (parent[0] == '#sessions-list?id') {
        sessions.renderSessionById('main-view', parent[1])
    } else if (parent[0] == '#speakers-list?id') {
        speaker.renderSpeakersById('main-view', parent[1])
    } else {

    }
}
window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
    router();
});