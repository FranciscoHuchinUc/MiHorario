CREATE DATABASE BDHorario;

USE BDHorario;

CREATE TABLE Usuario(
    id                INT            NOT NULL     AUTO_INCREMENT,
    nombre            VARCHAR(20)    NOT NULL,
    segundo_nombre    VARCHAR(20)    NOT NULL,
    apellido          VARCHAR(20)    NOT NULL,
    apellidom         VARCHAR(15)    NOT NULL,
    gmail             VARCHAR(30)    NOT NULL,
    contrasenia       VARCHAR(15)    NOT NULL,
    carrera           VARCHAR(25)    NOT NULL,
    PRIMARY KEY (id)
)ENGINE=MYISAM;

DESCRIBE Usuario;

INSERT INTO Usuario (nombre, segundo_nombre, apellido, apellidom, gmail, contrasenia, carrera) values ('Francisco', 'Josue', 'Huchin', 'Uc','7026@itescam.edu.mx', '1234', 'ISC');

SELECT * FROM Usuario;