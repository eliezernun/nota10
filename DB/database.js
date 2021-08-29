import Realm from 'realm';
import { MateriasShema, ProvasSchema, TrabalhosSchema } from '../Schemas/Schemas'

export default async function getRealm(){

    return Realm.open({
        schema: [MateriasShema, ProvasSchema, TrabalhosSchema],
    })
}