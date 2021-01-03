import { listCharacters } from '../../../controllers/CharacterController'

export function get(req, res,next) {
    const { slug } = req.params

    listCharacters(slug).then(data => {
        res.setHeader('Content-Type', 'application/json')
        res.end(data)
    }).catch(error => console.log(error))
}
