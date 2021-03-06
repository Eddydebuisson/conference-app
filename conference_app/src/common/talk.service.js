class TalkService {

    findAllSpeakers(){
        return new Promise( (resolve, reject) => {
        
            const req = new XMLHttpRequest();
            req.open('GET', 'http://localhost:3000/speakers', true);
            req.onreadystatechange = (aEvt) => {
                if (req.readyState == 4) {
                    if(req.status == 200)
                        resolve(JSON.parse(req.responseText)); // corps de la réponse
                    else
                        throw "Erreur pendant le chargement de la page";
                    }
            };
            req.send(null);

        });
    }
    findAllSessions(){
                return new Promise( (resolve, reject) => {
        
            const req = new XMLHttpRequest();
            req.open('GET', 'http://localhost:3000/sessions', true);
            req.onreadystatechange = (aEvt) => {
                if (req.readyState == 4) {
                    if(req.status == 200)
                        resolve(JSON.parse(req.responseText)); // corps de la réponse
                    else
                        throw "Erreur pendant le chargement de la page";
                    }
            };
            req.send(null);

        });
    }
    findSessionById(id){
                return new Promise( (resolve, reject) => {
        
            const req = new XMLHttpRequest();
            req.open('GET', 'http://localhost:3000/sessions?id='+id, true);
            req.onreadystatechange = (aEvt) => {
                if (req.readyState == 4) {
                    if(req.status == 200)
                        resolve(JSON.parse(req.responseText)); // corps de la réponse
                    else
                        throw "Erreur pendant le chargement de la page";
                    }
            };
            req.send(null);

        });

    }
      findSpeakersById(id){
        return new Promise( (resolve, reject) => {
        
            const req = new XMLHttpRequest();
            req.open('GET', 'http://localhost:3000/speakers?id='+id, true);
            req.onreadystatechange = (aEvt) => {
                if (req.readyState == 4) {
                    if(req.status == 200)
                        resolve(JSON.parse(req.responseText)); // corps de la réponse
                    else
                        throw "Erreur pendant le chargement de la page";
                    }
            };
            req.send(null);

        });
    }
}

export default TalkService ;