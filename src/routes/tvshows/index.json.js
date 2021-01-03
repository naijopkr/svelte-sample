import { listTvShow } from '../../../controllers/TvShowController'

export function get(req, res, next) {
    listTvShow().then(data => {
        res.setHeader('Content-Type', 'application/json')
        res.end(data)
    }).catch(error => console.log(error))
}
