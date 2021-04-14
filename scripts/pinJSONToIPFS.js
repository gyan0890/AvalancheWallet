const axios = require('axios');

//This data would be the json file created inside the credentials folder
var data = JSON.stringify(
    {
        //Will be the JSON created from the credentials
});

pinJSONToIPFS = (pinataApiKey, pinataSecretApiKey, JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    return axios
        .post(url, data, {
            headers: {
                pinata_api_key: pinataApiKey,
                pinata_secret_api_key: pinataSecretApiKey
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};

pinJSONToIPFS('b7c2feaad1b9f334121f', 'c78c21e894412085804708db7978fa89f2469abad803c444ca17641c13cb947b');
