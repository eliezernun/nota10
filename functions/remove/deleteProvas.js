import getRealm from '../../DB/database'

export async function DeletaProvas(data){
    console.log(data.id)
    const realm = await getRealm();
    try {
        const deleteItem = realm.objects('Provas').filtered(`id == '${data.id}'`)
        realm.write(() => {
            // Delete all instances of Cat from the realm.
            realm.delete(realm.objects('Provas').filtered(`id == '${data.id}'`));
          });
          return true
    } catch (error) {
        console.log(error)
        return false
    }
}