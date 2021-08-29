import getRealm from '../DB/database'

export default async function DetalhaMaterias(item){
   
    const realm = await getRealm();
    const data = realm.objects('Materias').filtered('IDdono' == item)

    return data
}