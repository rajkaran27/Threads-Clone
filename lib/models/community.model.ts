import mongoose from "mongoose";


const communitySchema = new mongoose.Schema({
    id:{type:String,required:true},
    username:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    image:String,
    bio:String,
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Thread'
    },
    threads:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Thread'
        }
    ],
    members:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    onboarded:{
        type:Boolean,
        default:false
    },
    communities:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Community'
        }
    ]
})

const Community = mongoose.models.Community || mongoose.model('User',communitySchema)

export default Community;