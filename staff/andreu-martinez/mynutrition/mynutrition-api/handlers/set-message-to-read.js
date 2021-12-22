const { setMessageToRead } = require('mynutrition-logic')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process
const handleError = require('./helpers/handle-error')

module.exports = (req, res) => {
    const { headers: { authorization }, body: data } = req

    try {
        const [, token] = authorization.split(' ')

        const { sub: id } = jwt.verify(token, SECRET)

        setMessageToRead(id, data)
            .then(() => res.status(204).send())
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}