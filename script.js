let usuarios = [];

function inserirUsuarios(nome){

    let promise = new Promise(function (resolve,reject){
        usuarios.push(nome);

        let erro = false;

        if(!erro){
        resolve();
        }

        else{
            reject({msg:"Algo deu errado!"});
        }
        
    })

    return promise;
    }


function listarUsuarios(){
    console.log(usuarios);
}

inserirUsuarios("Mario");
inserirUsuarios("Josué");
inserirUsuarios("Luana").then(listarUsuarios);
