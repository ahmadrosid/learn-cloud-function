
exports.main = (req, res) => {
	console.log("Logging it's running")
	res.status(200).send("Cloud function running!")
}