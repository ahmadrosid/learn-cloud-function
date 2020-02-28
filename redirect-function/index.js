const fetch = require('node-fetch')

const getUserInfo = async(username) => {
	const url = `https://api.github.com/users/${username}`
	return fetch(url).then(res => res.json())
}

exports.main = async (req, res) => {
	const username = req.query.username || 'ahmadrosid'
	try{
		const response = await getUserInfo(username)
		const avatarUrl = response.avatar_url
		res.redirect(avatarUrl)
	} catch(e) {
		res.status(501).send(e.message)
	}
}