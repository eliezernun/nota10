import getRealm from '../../DB/database'

export async function BuscaNotas(Update){
        
        var resultados = []
   
        const realm = await getRealm();
        const data =  realm.objects('Materias')
        data.map(item =>{
            resultados.push({
                id: item.id,
                materia: item.materia,
                cor: item.color,
                A1: 0,
                A2: 0,
                A3: 0,
                A4: 0,
                N1: 0,
                N2: 0,
                APS: 0,
                pe: 0,
                pe2:0,
                M1: 0,
                M2: 0,
                Sub: 0,})
            const provas = realm.objects('Provas').filtered(`idDono == '${item.id}'`)
            const trabalhos = realm.objects('Trabalhos').filtered(`idDono == '${item.id}'`)
            provas.map(prov =>{
                for ( var i in resultados){
                    if(resultados[i].id == item.id){
                        if(prov.grupoNota == 'N1'){
                            resultados[i].N1 = prov.nota
                        }
                        else if(prov.grupoNota == 'N2'){
                            resultados[i].N2 = prov.nota
                        }
                        else if(prov.grupoNota == 'SUB'){
                            resultados[i].Sub = prov.nota
                        }
                        else if(prov.grupoNota == 'Extra N1'){
                            resultados[i].M1 += prov.nota
                        }
                        else if(prov.grupoNota == 'Extra N2'){
                            resultados[i].M2 += prov.nota
                        }
                        
                    }
                }
            })
            trabalhos.map(trab =>{
                for (var i in resultados){
                    if(resultados[i].id == item.id){
                     if(trab.grupoNota == 'A1'){
                         resultados[i].A1 = trab.nota
                     }
                     else if(trab.grupoNota == 'A2'){
                        resultados[i].A2 = trab.nota
                    }
                    else if(trab.grupoNota == 'A3'){
                        resultados[i].A3 = trab.nota
                    }
                    else if(trab.grupoNota == 'A4'){
                        resultados[i].A4 = trab.nota
                    }
                    else if(trab.grupoNota == 'APS'){
                        resultados[i].APS = trab.nota
                    }
                    else if(trab.grupoNota == 'Extra'){
                        resultados[i].pe += trab.nota
                    }
                    }
                }
            })  

        })

        Update(resultados)
}
   
