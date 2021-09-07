import getRealm from '../../DB/database'

export async function DeletaTrabalhos(data){
    console.log(data.id)
    const realm = await getRealm();
    try {
        const deleteItem = realm.objects('Trabalhos').filtered(`id == '${data.id}'`)
        realm.write(() => {
            // Delete all instances of Cat from the realm.
            realm.delete(realm.objects('Trabalhos').filtered(`id == '${data.id}'`));
          });
          return true
    } catch (error) {
        console.log(error)
        return false
    }

}