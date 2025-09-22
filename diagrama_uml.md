classDiagram
    class Usuario {
        +idUsuario
        +nome
        +email
        +senha
        +idade
        +peso
        +altura
        +restricoes
    }

    class Objetivo {
        +idObjetivo
        +descricao
        +tipo
    }

    class Dieta {
        +idDieta
        +nome
        +descricao
        +totalCalorias
    }

    class Alimento {
        +idAlimento
        +nome
        +calorias
        +proteinas
        +carboidratos
        +gorduras
    }

    class CalculadoraCal {
        +calcularTMB()
        +calcularNecess()
    }

    class DicaAlimentar {
        +idDica
        +titulo
        +conteudo
    }

    class Profissional {
        +idProfissional
        +nome
        +especialidade
    }

    class Consulta {
        +idConsulta
        +dataHora
        +observacoes
    }

    %% RELACIONAMENTOS
    Usuario "1" --> "*" Objetivo : define
    Usuario "1" --> "*" Dieta : cria
    Dieta "*" --> "*" Alimento : contém
    Usuario "1" --> "1" CalculadoraCal : usa
    CalculadoraCal --> Alimento
    Usuario "1" --> "*" DicaAlimentar : acessa
    Profissional "1" --> "*" Consulta : realiza
    Consulta "*" --> "1" Usuario : pertence
