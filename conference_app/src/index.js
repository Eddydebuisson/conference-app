import TalkService from './common/talk.service';



let service = new TalkService();

service.findAllSpeakers().then(reqspeaker => {

        reqspeaker.map(speaker => speaker.firstname).forEach( s => { console.log(s)});
});