-- Criação da tabela Professor
CREATE TABLE Professor (
    Codp INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    fone VARCHAR(20)
);

-- Criação da tabela Disciplina
CREATE TABLE Disciplina (
    Codd INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

-- Criação da tabela Aluno
CREATE TABLE Aluno (
    Coda INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

-- Criação da tabela Relacionamento 1 para N (Professor para Disciplina)
CREATE TABLE Professor_Disciplina (
    Codp INT,
    Codd INT,
    PRIMARY KEY (Codp, Codd),
    FOREIGN KEY (Codp) REFERENCES Professor(Codp),
    FOREIGN KEY (Codd) REFERENCES Disciplina(Codd)
);

-- Criação da tabela Relacionamento N para N (Disciplina para Aluno)
CREATE TABLE Disciplina_Aluno (
    Codd INT,
    Coda INT,
    ano INT,
    PRIMARY KEY (Codd, Coda),
    FOREIGN KEY (Codd) REFERENCES Disciplina(Codd),
    FOREIGN KEY (Coda) REFERENCES Aluno(Coda)
);
