const { mongoose, MongoClient } = require('mongoose');

const URI_MONGODB = 'mongodb+srv://phongnx:Ec4hzCb1u7o1JpQc@cluster0.rga3ezd.mongodb.net/blog?retryWrites=true&w=majority';

async function connect() {
    try {
        await mongoose.connect(URI_MONGODB);
        console.log('Connect successfull!!!');
    } catch (error) {
        console.log('fail',error);
    }
}

module.exports = { connect };