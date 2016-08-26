-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Máquina: 127.0.0.1
-- Data de Criação: 26-Ago-2016 às 22:17
-- Versão do servidor: 5.6.11
-- versão do PHP: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de Dados: `ciesd`
--
CREATE DATABASE IF NOT EXISTS `ciesd` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `ciesd`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `documento`
--

CREATE TABLE IF NOT EXISTS `documento` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador do Documento',
  `titulo` varchar(256) NOT NULL COMMENT 'Título do Documento',
  `tipoDocumento` int(11) NOT NULL COMMENT 'Chave estrangeira do Tipo do Documento',
  `dataCadastro` date NOT NULL COMMENT 'Data de cadastro do Documento',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Extraindo dados da tabela `documento`
--

INSERT INTO `documento` (`id`, `titulo`, `tipoDocumento`, `dataCadastro`) VALUES
(1, 'OfÃ­cio nÂº 035/2016 - ASP/CPC', 1, '2016-08-24'),
(2, 'OfÃ­cio nÂº 035/2016 - ASP/CPC', 1, '2016-08-24'),
(3, 'OfÃ­cio nÂº 035/2016 - ASP/CPC', 1, '2016-08-24'),
(4, 'OfÃ­cio nÂº 035/2016 - ASP/CPC', 1, '2016-08-24'),
(5, 'OfÃ­cio nÂº 035/2016 - ASP/CPC', 1, '2016-08-24'),
(6, 'OfÃ­cio nÂº 035/2016 - ASP/CPC', 1, '2016-08-24'),
(7, 'OfÃ­cio nÂº 035/2016 - ASP/CPC', 1, '2016-08-24'),
(8, 'Outro tÃ­tulo de documento', 3, '2016-08-25'),
(9, 'Outro tÃ­tulo de documento', 3, '2016-08-25');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipodocumento`
--

CREATE TABLE IF NOT EXISTS `tipodocumento` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador do Tipo de Documento',
  `nome` varchar(32) NOT NULL COMMENT 'Nome do Tipo do Documento',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=22 ;

--
-- Extraindo dados da tabela `tipodocumento`
--

INSERT INTO `tipodocumento` (`id`, `nome`) VALUES
(1, 'Processo'),
(2, 'Protocolo'),
(3, 'OfÃ­cio'),
(4, 'Outros'),
(5, 'Outro Tipo'),
(6, 'Alterado Tipo'),
(10, 'Alterado Tipo'),
(19, 'Alterado Tipo'),
(20, 'OutrÃ³ TÃ­po'),
(21, 'OutrÃ³ TÃ­po');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tramite`
--

CREATE TABLE IF NOT EXISTS `tramite` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador do Tramite',
  `origem` varchar(256) NOT NULL COMMENT 'Órgão de origem',
  `destino` varchar(256) NOT NULL COMMENT 'Órgão de destino',
  `documento` int(11) NOT NULL,
  `dataTramite` date NOT NULL COMMENT 'Data da Tramitação',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Extraindo dados da tabela `tramite`
--

INSERT INTO `tramite` (`id`, `origem`, `destino`, `documento`, `dataTramite`) VALUES
(4, 'CPC', 'SETI', 1, '2016-08-24'),
(5, 'CPC', 'FundaÃ§Ã£o AraucÃ¡ria', 1, '2016-08-24'),
(6, 'CPC', 'FundaÃ§Ã£o AraucÃ¡ria', 2, '2016-08-24'),
(8, 'CPC', 'SETI', 8, '2016-08-25'),
(9, 'SETI', 'CPC', 8, '2016-08-25'),
(10, 'CPC', 'GRE', 8, '2016-08-25'),
(11, 'CPC', 'SETI', 9, '2016-08-25'),
(12, 'SETI', 'CPC', 9, '2016-08-25'),
(13, 'CPC', 'GRE', 9, '2016-08-25');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
