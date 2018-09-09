import axios from 'axios'
 
class tumblrApi {
    constructor() {
        let domain = 'trkttrk.tumblr.com'
        let apikey = 'TOpw8eLYtqntfbzf7vkIpG5R2r5mBttHwPU9ohsfuzEGsIfrru'
        var url = 'http://api.tumblr.com/v2/blog/' + domain + '/posts?api_key=' + apikey
    }
 
    posts() {
        return axios.get(`${url}`)
            .then(json => {
                return json.data;
            })
            .catch(e => ({ error: e }));
    }
}
 
// const tumblrApi = new tumblrApi();
 
export default tumblrApi;