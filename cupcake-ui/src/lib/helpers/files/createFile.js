const axios = require('../../axios');

const requestBody = {
    data: {
        type: "file",
        attributes: {
            payload: {}
        },
        relationships: {
            "initial-account": {
                data: {
                    type: "account",
                    id: ""
                }
            },
            "file-type": {
                data: {
                    id: ""
                }
            }
        }
    }
};

const createFile = (payload, initialAccount, fileType) => {
    
    let body = requestBody;
    // (1/2) Update the relevant fields of body with the arguments above
    body['data']['attributes']['payload'] = payload;
    body['data']['relationships']['initial-account']['data']['id'] = initialAccount;
    body['data']['relationships']['file-type']['data']['id'] = fileType;

    // (2/2) Replace FIX-ME below with the appropriate API path
    let path = `/files`;

    return axios.post(path, body, {})
        .then(res => res.data.data)
        .catch(error => console.log(error))
};

module.exports = createFile;
