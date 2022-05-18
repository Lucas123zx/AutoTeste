class registroElements{
    registrar = () => {return '.btn'}
    campoEmail = () => {return 'input[formcontrolname="email"]'}
    emailObrigatorio = () => {return 'ap-vmessage' , 'Email is required'}
    nomeCompletoObrigatorio = () => {return 'ap-vmessage' , 'Full name is required!'}
    nomeUsuarioObrigatorio = () => {return 'ap-vmessage' , 'User name is required!'}
    senhaObrigatoria = () => {return 'ap-vmessage' , 'Password is required!'}

}

export default registroElements;