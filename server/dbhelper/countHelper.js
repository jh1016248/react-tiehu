const Count = require('../modules/count')

exports.getLastId = async (key) => {
    let getRes = await Count.find({key: key}, (err, res) => {
        if(!err) {
            return res.value
        }
    })
    return getRes[0].value + 1;
}

exports.updateId = async (key, value) => {
    let res = await Count.updateOne({key: key}, {value: value}, (err, res) => {
        return err
    })
    
    return res.ok === 1;
}

