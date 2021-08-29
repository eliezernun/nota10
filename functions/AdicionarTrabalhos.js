import getRealm from '../DB/database'

export default async function FNAdicionarTrabalhos(info){

    try {
     const realm = await getRealm();

     realm.write(()=>{
         realm.create('Trabalhos', info)
     })

     return true

    } catch (error) {
        console.log(error)
        return false
    }
}