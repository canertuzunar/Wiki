import mongoose from 'mongoose'
mongoose.Promise = global.Promise;
export const connect = async (url, opts = {}) => {
    return await mongoose.connect(
        url,
        {...opts, useNewUrlParser: true}
    )
}

export default {connect}