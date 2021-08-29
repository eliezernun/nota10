import getRealm from '../DB/database'

export default async function BuscaMaterias(item){
   
    const realm = await getRealm();
    const data = realm.objects('Materias')

    return data
}