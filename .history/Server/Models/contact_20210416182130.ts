import mongoose, { PassportLocalSchema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
const Schema = mongoose.Schema;

const ContactSchema = new Schema
({
    username: String,
    emailAddress: String,
    displayName: String,
    created:
    {
        type: Date,
        default: Date.now()
    },
    updated: 
    {
        type: Date,
        default: Date.now()
    }
},
{
    collection: "users"
});

ContactSchema.plugin(passportLocalMongoose);

const Model = mongoose.model("User", ContactSchema as PassportLocalSchema);
declare global
{
    export type ContactDocument = mongoose.Document & 
    {
        _id: String,
        username: String,
        emailAddress: String,
        displayName: String
    }
}
export default Model;

