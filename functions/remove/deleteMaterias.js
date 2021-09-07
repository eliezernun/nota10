import getRealm from '../../DB/database'

export async function DeletaMaterias(data){
    console.log(data.id)
    const realm = await getRealm();
    try {
        realm.write(() => {
            // Delete all instances of Cat from the realm.
            realm.delete(realm.objects('Provas').filtered(`idDono == '${data.id}'`));
            realm.delete(realm.objects('Trabalhos').filtered(`idDono == '${data.id}'`));
            realm.delete(realm.objects('Materias').filtered(`id == '${data.id}'`));
          });
          return true
    } catch (error) {
        console.log(error)
        return false
    }

}