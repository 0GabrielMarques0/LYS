/*inicio da progamação base do LYS*/
let insert = require(`readline-sync`)

let usuarios = []
let voluntarios = []

function app (){
    console.log(`Abrindo APP....`)
}

function login (usuarios,voluntarios,){
    if (usuarios.length === 0 && voluntarios.length ===0){
        console.log(`Ainda nao existem usuarios cadastrados!\nFavor faça o cadastro para realizar o login!`)
    }else{
        let tipoDeLogin = parseInt(insert.question(`Qual seu tipo de conta?\n1 - Usuario\n2 - Voluntario\n3 - Voltar\n`))
        if (tipoDeLogin === 1){
            let email = insert.question(`Digite seu e-mail: `)
            for (let i = 0; i<usuarios.length;i++){
                if (email === usuarios[i].email){
                    let senha = insert.question(`Digite sua senha: `)
                    for (let i = 0; i<usuarios.length;i++){
                        if (senha === usuarios[i].senha){
                            app()
                        }else{
                            console.log(`Senha incorreta!`)
                        }
                    }
                }else{
                    console.log(`E-mail incorreto!`)
                }
            }
        }else if (tipoDeLogin === 2){
            let email = insert.question(`Digite seu e-mail: `)
            for (let i = 0;i<voluntarios.length;i++){
                if (email === voluntarios[i].email){
                    let senha = insert.question(`Digite sua senha: `)
                    for (let i = 0; i< voluntarios.length;i++){
                        if (senha === voluntarios[i].senha){
                            app()
                        }else{
                            console.log(`Senha incorreta!`)
                        }
                    }
                }else{
                    console.log(`E-mail incorreto!`)
                }
            }
        }
    }
}

function cadastro (usuarios,voluntarios){
    let escolha = parseInt(insert.question(`Bem vindo ao cadastro do LYS!\nDeseja criar a conta como:\n1 - Usuario\n2 - Voluntario\n3 - Voltar\n`))
    if (escolha === 1){
        let usuario = {
            idUsuario: Math.random() * 1001,
            nome: insert.question(`Digite seu nome completo: `) .toLocaleUpperCase(),
            telefone: insert.question(`Digite seu telefone: `),
            email: insert.question(`Digite seu e-mail: `),
            senha: insert.question(`Digite sua senha: `),
            confirmaSenha: insert.question(`Confirme sua senha: `),
        }
        usuarios.push(usuario)
    }else if (escolha ===2){
        let voluntario = {
            idVoluntario: Math.random() * 1001,
            nome: insert.question(`Digite seu nome completo: `) .toLocaleUpperCase(),
            telefone: insert.question(`Digite seu telefone: `),
            crp: insert.question(`Digite seu CRP: `),
            email: insert.question(`Digite seu e-mail: `),
            senha: insert.question(`Digite sua senha: `),
            confirmaSenha: insert.question(`Confirme sua senha: `),
        }
        voluntarios.push(voluntario)
    }else if (escolha ===3){
        lys()
    }else{
        console.log(`Digite uma opção válida!`)
    }
}

function esqueceuSenha (usuarios,voluntarios){
    
    let email = insert.question(`Digite o e-mail que foi cadastrado: `)
    for (let i = 0; i<usuarios.length;i++){
        if (email === usuarios[i].email){
            console.log(`Foi enviado para o e-mail cadastrado um codigo de recuperação de senha.\nVerifique seu e-mail para continuar com o procedimento de recuperacao de senha`)
        }else{
            for (let i = 0; i<voluntarios.length;i++){
                if (email === voluntarios[i].email){
                    console.log(`Foi enviado para o e-mail cadastrado um codigo de recuperação de senha.\nVerifique seu e-mail para continuar com o procedimento de recuperacao de senha`)
                }else{
                    console.log(`O e-mail digitado não existe! Favor verificar o e-mail e digitar novamente!`)
                }
            }
        }
    }
}

function entrarCom (){
    let entrar = parseInt(insert.question(`Desejar com entrar com:\n1 - Facebook\n2 - Google\n3 - Twitter\n4 - Voltar\n`))
    if (entrar ===1){
        console.log(`Abrindo Facebook...`)
    }else if (entrar ===2){
        console.log(`Abrindo Google...`)
    }else if (entrar ===3){
        console.log(`Abrindo Twitter...`)
    }else if (entrar ===4){
        lys()
    }else{
        console.log(`Digite uma opcao valida!`)
    }
}

function lys(){
    while(true){
        let menu = parseInt(insert.question(`Bem vindo ao LYS!\nEscolha o que desejar fazer:\n1 - Login\n2 - Criar conta\n3 - Esqueceu a senha?\n4 - Entrar com alguma rede\n5 - Sair\n`))
        if (menu === 1){
            login(usuarios,voluntarios)
        }else if (menu ===2){
            cadastro(usuarios,voluntarios)
        }else if (menu ===3){
            esqueceuSenha(usuarios,voluntarios)
        }else if (menu ===4){
            entrarCom()
        }else if (menu ===5){
            console.log(`Obrigado por usar o LYS, esperamos que volte logo!`)
            break
        }else {
            console.log(`Digite uma opção válida!`)
        }
    }
}lys()