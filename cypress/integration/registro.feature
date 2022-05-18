Feature: Registro de usuário

#Descrition: Verificar a exibição de mensagems em campos obrigatório para registar no sistema
    Scenario:Mensagem de campos obrigatorios
    Given esteje na tela de singup
    When clicar em register 
    Then deverá apresentar mensagem informando que campos são obrigatorios

#Descrition: Verificar a exibição de mensagem ao preencher campo email fora do padrão 
    Scenario:Mensagem de email inválido
    Given esteje na tela de singup
    When digitar um email inválido
    Then deverá apresentar uma mensagem de email inválido