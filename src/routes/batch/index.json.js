import { listBatches } from '../../../controllers/BatchController'

export function get(req, res, next) {
    listBatches().then(data => {
        res.setHeader('Content-Type', 'application/json')
        res.end(data)
    }).catch(error => console.log(error))
}
