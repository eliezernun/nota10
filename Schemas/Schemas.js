export const MateriasShema = {
    name: 'Materias',
    primaryKey: 'id',
    properties:{
        id: {type: 'string', indexed: true},
        materia: 'string',
        professor: 'string',
        diaSemana: 'string',
        color: 'string',
        status: 'bool',
    }
}

export const ProvasSchema ={
    name: 'Provas',
    primaryKey: 'id',
    properties:{
        id: {type: 'string'},
        idDono:{type: 'string', indexed: true},
        titulo:'string',
        grupoNota: 'string',
        nota: 'float',
        data: 'string',
        status: 'bool',
    }
}
export const TrabalhosSchema ={
    name: 'Trabalhos',
    primaryKey: 'id',
    properties:{
        id: {type: 'string'},
        idDono:{type: 'string', indexed: true},
        titulo: 'string',
        grupoNota: 'string',
        nota: 'float',
        data: 'string',
        status: 'bool',
    }
}

