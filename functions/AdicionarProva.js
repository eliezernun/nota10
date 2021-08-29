import getRealm from '../DB/database'

export default async function FNAdicionarProva(info){

    try {
     const realm = await getRealm();

     realm.write(()=>{
         realm.create('Provas', info, 'modified')
     })

     return true

    } catch (error) {
        console.log(error)
        return false
    }
}