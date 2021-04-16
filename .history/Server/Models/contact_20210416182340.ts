import mongoose, { PassportLocalSchema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
const Schema = mongoose.Schema;

const ContactSchema = new Schema
({
    FirstName: String,
    LastName: String,
    ContactNumber: String,
    EmailAddress: String
},
{
    collection: "contacts"
});


const Model = mongoose.model("Contact", ContactSchema);
export default Model;

