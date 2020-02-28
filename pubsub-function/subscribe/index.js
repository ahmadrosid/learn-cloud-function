exports.subscribe = (event, context) => {
	const pubsubMessage = event.data
	console.log(Buffer.from(pubsubMessage, 'base64').toString())
}
