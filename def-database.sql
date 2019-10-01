-- Database: api-tienda-node

-- DROP DATABASE "api-tienda-node";

CREATE DATABASE "api-tienda-node"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Spain.1252'
    LC_CTYPE = 'Spanish_Spain.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;


******************************************************
-- Table: public.productos

-- DROP TABLE public.productos;

CREATE TABLE public.productos
(
    codigo character varying(30) COLLATE pg_catalog."default" NOT NULL,
    nombre character varying(30) COLLATE pg_catalog."default" NOT NULL,
    precio real,
    CONSTRAINT productos_pkey PRIMARY KEY (codigo)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.productos
    OWNER to postgres;

******************************************************

INSERT INTO public.productos(codigo, nombre, precio)
    VALUES  ('PANTALONES', 'Pantalones', 5.00),
            ('CAMISETA', 'Camiseta', 20.00),
            ('SOMBRERO', 'Sombrero', 7.50);