import getRealm from "../../DB/database";

export default async function BuscaAtividades(Update){
    var resultados = []   
        const realm = await getRealm();
    


        const Provas =  realm.objects('Provas')
        Provas.map(item =>{
            resultados.push({
                id: item.id,
                idDono: item.idDono,
                data: item.data,
                tipo: item.grupoNota,
                titulo: item.titulo,
                cor: '',
                materia: '',             
            })
    
        })
        const Trabalhos = realm.objects('Trabalhos');
        Trabalhos.map(item =>{
            resultados.push({
                id: item.id,
                idDono: item.idDono,
                data: item.data,
                tipo: item.grupoNota,
                titulo: item.titulo,
                cor: '',
                materia: '',             
            })
        })

        const Materias = realm.objects('Materias')
        Materias.map(item =>{
            for(i in resultados){
                if(resultados[i].idDono == item.id){
                    resultados[i].cor = item.color
                    resultados[i].materia = item.materia
                }
            }
        })

    Update(resultados)
}
