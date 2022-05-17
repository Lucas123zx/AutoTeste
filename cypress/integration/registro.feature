Feature: Registro de usuário

    Scenario:Mensagem de validação
    Given usuário esteje na pagína do alurapPic
    And acesse registre now
    When clicar em register
    Then deverá apresentar uma mensagem de erro
