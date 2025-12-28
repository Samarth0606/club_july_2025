import mongoose from "mongoose";

// schema
// const dummySchema = new mongoose.Schema({
//     age: {
//         type: Number,
//         required: true,
//         min: 0
//     },
//     isMale: {
//         type: Boolean,
//         required: true
//     },
//     bestFriend: String
// })
const dummySchema = new mongoose.Schema({ //shorthand (shortcut)
    age: Number,
    isMale: Boolean,
    bestFriend: String,
})

// model / collection
const DummyModel = mongoose.model('Dummy',   dummySchema)
//  vs code name              collectionname  schema name

// module.exports = DummyModel // old (commonjs)
export default DummyModel; // new (esmodule)