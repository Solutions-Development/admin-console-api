-- MySQL dump 10.13  Distrib 5.5.62, for Linux (x86_64)
--
-- Host: localhost    Database: solutions
-- ------------------------------------------------------
-- Server version	5.5.62

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actividads`
--

DROP TABLE IF EXISTS `actividads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `actividads` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `fecha_inicio` varchar(255) DEFAULT NULL,
  `fecha_termino` varchar(255) DEFAULT NULL,
  `duracion` varchar(255) DEFAULT NULL,
  `locacion` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `actividad_dirigida` varchar(255) DEFAULT NULL,
  `createdAt` varchar(255) DEFAULT NULL,
  `updatedAt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actividads`
--

LOCK TABLES `actividads` WRITE;
/*!40000 ALTER TABLE `actividads` DISABLE KEYS */;
/*!40000 ALTER TABLE `actividads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conferencista`
--

DROP TABLE IF EXISTS `conferencista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `conferencista` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `cedula` varchar(255) DEFAULT NULL,
  `nacionalidad` varchar(255) DEFAULT NULL,
  `telefono_movil` varchar(255) DEFAULT NULL,
  `telefono_trabajo` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `estudio_grado` varchar(255) DEFAULT NULL,
  `sub_especialidad` varchar(255) DEFAULT NULL,
  `practica_publica` varchar(255) DEFAULT NULL,
  `practica_privada` varchar(255) DEFAULT NULL,
  `membresias` varchar(255) DEFAULT NULL,
  `biografia` varchar(255) DEFAULT NULL,
  `createdAt` varchar(255) DEFAULT NULL,
  `updatedAt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conferencista`
--

LOCK TABLES `conferencista` WRITE;
/*!40000 ALTER TABLE `conferencista` DISABLE KEYS */;
/*!40000 ALTER TABLE `conferencista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sedes`
--

DROP TABLE IF EXISTS `sedes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sedes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `ubicacion` varchar(255) DEFAULT NULL,
  `direccion_detallada` varchar(255) DEFAULT NULL,
  `cantidad_salones` varchar(255) DEFAULT NULL,
  `createdAt` varchar(255) DEFAULT NULL,
  `updatedAt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sedes`
--

LOCK TABLES `sedes` WRITE;
/*!40000 ALTER TABLE `sedes` DISABLE KEYS */;
/*!40000 ALTER TABLE `sedes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` varchar(255) DEFAULT NULL,
  `updatedAt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'David','locomotora','su','Invalid date','2020-01-24 05:19:43');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-24 15:09:16
