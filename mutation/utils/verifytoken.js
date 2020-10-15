import jwt from'jsonwebtoken'
export default function VerifyToken(req, res, next) {
    const token = req.headers['x-access-token'] || req.headers['authorization'] || req.query.token;
    if(!token) {
        return res.status(403).json({
            success: false,
            message: 'not logged in'
        })
    }

    const p = new Promise((resolve, reject) => {
        jwt.verify(token, 'secretKey', (err, decoded) => {
            if(err) reject(err)
            resolve(decoded)
        })
    })

    const errorHandler = (error) => {
        res.status(403).json({
            success:false,
            message: error.message
        })
    }

    p.then((decoded) => {
        req.decoded = decoded
        next();
    }).catch(errorHandler)
}