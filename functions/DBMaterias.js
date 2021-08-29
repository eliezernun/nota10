import getRealm from '../DB/database'

export default async function AdicionarMateria(info){

    try {
     const realm = await getRealm();

     realm.write(()=>{
         realm.create('Materias', info)
     })

     return true

    } catch (error) {
        console.log(error)
        return false
    }
}