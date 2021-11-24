// El paquete requerido para conectarse con Mongo
const { MongoClient } = require('mongodb')
// El puerto en el que se encuentra alojada la bbdd en local
const client = new MongoClient('mongodb://localhost:27017')

// Librería con vuestras funciones
const {createUser, updateUser, findUser, deleteUser} = require('./logic-mongo')

// Configuración inicial de Mongo
client.connect(error => {
    if (error) return console.error(error)
    // Delcaración de la BBDD a la que apunta nuestro programa
    const demo = client.db('demo')
    // La coleción específica
    const usersCollection = demo.collection('users')

    //Demo de createUser
    const user = { name: 'Tigre Ton', username: 'tigreton', password: '123123123 '}
    createUser(usersCollection, user, (err, users) => {
        if(err) console.error(err)
        console.table(users)
        client.close()
    })

    //Find User
    // const user = { query: 'i'}
    // findUser(usersCollection, user, (err, users) => {
    //         if(err) console.error(err)
    //         console.table(users)
    //         client.close()
    // })

    //Delete user
    // const user = { username: 'tigreton', password: '123123123 '}
    // deleteUser(usersCollection, user, (err, user)=>{
    //     if(err) console.error(err)
    //     console.table(user)
    //     client.close()
    // })
})
