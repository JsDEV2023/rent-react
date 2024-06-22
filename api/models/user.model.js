import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: {
        type: String,
        default: "https://belon.club/uploads/posts/2023-04/1681434444_belon-club-p-khitrii-yenot-oboi-1.jpg"
    }
},{ timestamps: true})

const User = mongoose.model('User', userSchema)

export default User