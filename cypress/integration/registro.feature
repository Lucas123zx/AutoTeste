Feature: Registro de usuário

    Scenario:Mensagem de Email Obrigátorio
    Given usuário esteje na pagina do alurapPic
    And acesse registe now
    When clicar em register
    Then deverá apresentar uma mensagem de email é obrigatório

    Scenario:Mensagem de campos obrigatorios
    Given usuário esteje na pagina do alurapPic
    And acesso register now
    When clicar em register 
    Then deverá apresenatr mensagem informando que campos são obrigatorios