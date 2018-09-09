import Vuex from 'vuex'

const store = () => new Vuex.Store({
    actions: {
        async callApi ({}, payload) {
			let domain = process.env.API_URL
			let apikey = process.env.API_KEY
			var url = 'http://api.tumblr.com/v2/blog/' + domain + '/posts?api_key=' + apikey
			return axios.get(url)
			.then((res) => {
			  return { tumblrData: res.data.response.posts }
			})
		}
    }
})

export default store