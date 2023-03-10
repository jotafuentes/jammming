

let accessToken = ;
const clientID = '27acf555a08644de9c71a86277b56c21'
const redirectUri = 'http://localhost:3000/'

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        //check for access token match

        const accessTokenMatch = window.location.href.match(access_token = ([^&] *));
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            // esto limpia los parámetros, permitiendo obtener un nuevo token.
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken
        }else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
            window.location.accessUrl
        }



    }

}

export default Spotify