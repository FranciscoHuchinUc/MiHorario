CREATE TABLE Usuario(
    id                INT            NOT NULL,
    primer_nombre     VARCHAR(20)    NOT NULL,
    segundo_nombre    VARCHAR(20),
    apellidop         VARCHAR(20)    NOT NULL,
    apellidom         VARCHAR(15)    NOT NULL,
    gmail             VARCHAR(30)    NOT NULL,
    contrasenia       VARCHAR(15)    NOT NULL,
    coordinacion      VARCHAR(25),
    rol            BIT(1)         NOT NULL,
    PRIMARY KEY (id, od_rol)
)ENGINE=MYISAM;