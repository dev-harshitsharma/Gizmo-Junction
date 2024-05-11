import bcrypt from "bcryptjs"
const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Ramesh Kumar',
        email: 'rameshK@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Kartik Mathur',
        email: 'KartikM@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
]
export default users