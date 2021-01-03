import { listCharacters } from '../../../controllers/CharacterController'

export function get(req, res,next) {
    const { slug } = req.params

    if (slug) {
        listCharacters(slug).then(data => {
            res.setHeader('Content-Type', 'application/json')
            res.end(data)
        }).catch(error => console.log(error))
    } else {
        next()
    }
}
