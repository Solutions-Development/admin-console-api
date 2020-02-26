const request = require("request-promise-native");


    function post() {
        function genCharacters(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
         }
        const characters = genCharacters(7);
        const id = genCharacters(1);
        const form = {
            id: id,
            nombre: characters,
            cedula: characters,
            nacionalidad: characters,
            telefono_movil: characters
        }
        let amount = 0;
        while (amount < 200) {
        Promise.resolve(request.post({
            url: "https://api.sistemasolutions.tech/evento",
            form,
            json: true
        })).then(async response => {
            console.log(response);
        });
        amount++;
      }
    }

post();