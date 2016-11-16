-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tempo de Geração: 16/11/2016 às 18:43
-- Versão do servidor: 5.6.11
-- Versão do PHP: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de dados: `ciesd`
--
CREATE DATABASE IF NOT EXISTS `ciesd` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `ciesd`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `documento`
--

CREATE TABLE IF NOT EXISTS `documento` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador do Documento',
  `titulo` varchar(256) NOT NULL COMMENT 'Título do Documento',
  `tipoDocumento` int(11) NOT NULL COMMENT 'Chave estrangeira do Tipo do Documento',
  `dataCadastro` date NOT NULL COMMENT 'Data de cadastro do Documento',
  `qtdTramites` int(11) NOT NULL DEFAULT '0' COMMENT 'Quantidade de tramitações do documento',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=32 ;

--
-- Fazendo dump de dados para tabela `documento`
--

INSERT INTO `documento` (`id`, `titulo`, `tipoDocumento`, `dataCadastro`, `qtdTramites`) VALUES
(1, 'OfÃ­cio nÂº 035/2016 - ASP/CPC', 1, '2016-09-01', 4),
(9, 'Outro tÃ­tulo de documento', 3, '2016-08-25', 3),
(14, 'Novo documento cadastrado pelo site', 2, '2016-01-01', 0),
(24, 'Teste de tipo de Documento', 4, '2016-02-01', 0),
(25, 'OfÃ­cio nÂº 70/2015 AraucÃ¡ria', 3, '2016-09-13', 0),
(26, 'Titulo do documento', 1, '2015-10-10', 0),
(27, 'Novo documento', 2, '2016-09-20', 0),
(28, 'Mais um Documento', 5, '2016-09-27', 2),
(29, 'Cadastrando Documentos para Teste', 4, '2016-01-01', 3),
(30, 'Documento de pedido de fÃ©rias do RogÃ©rio', 4, '2016-01-01', 4),
(31, 'RogÃ©rio fazendo teste de datas', 1, '2016-01-01', 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tipodocumento`
--

CREATE TABLE IF NOT EXISTS `tipodocumento` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador do Tipo de Documento',
  `nome` varchar(32) NOT NULL COMMENT 'Nome do Tipo do Documento',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Fazendo dump de dados para tabela `tipodocumento`
--

INSERT INTO `tipodocumento` (`id`, `nome`) VALUES
(1, 'Processo'),
(2, 'Protocolo'),
(3, 'OfÃ­cio'),
(4, 'Outros'),
(5, 'Outro Tipo');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tramite`
--

CREATE TABLE IF NOT EXISTS `tramite` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador do Tramite',
  `origem` varchar(256) NOT NULL COMMENT 'Órgão de origem',
  `destino` varchar(256) NOT NULL COMMENT 'Órgão de destino',
  `documento` int(11) NOT NULL,
  `dataTramite` date NOT NULL COMMENT 'Data da Tramitação',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=31 ;

--
-- Fazendo dump de dados para tabela `tramite`
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
(13, 'CPC', 'GRE', 9, '2016-08-25'),
(16, 'CPC', 'SETI', 1, '2016-09-27'),
(18, 'AAA', 'BBB', 30, '2015-10-10'),
(19, 'ASP', 'CPL', 30, '2000-01-01'),
(20, 'BBB', 'AAA', 30, '2015-10-11'),
(21, 'CPL', 'ASP', 30, '2000-01-02'),
(22, 'ASP', 'CPL', 29, '2015-01-01'),
(23, 'CPL', 'ASP', 29, '2015-01-02'),
(24, 'ASP', 'CPC', 29, '2015-01-03'),
(25, 'ASP', 'CPC', 31, '2015-10-10'),
(26, 'CPC', 'ASP', 31, '2015-10-11'),
(27, 'ASP', 'FundaÃ§Ã£o AraucÃ¡ria', 28, '2016-09-29'),
(28, 'FundaÃ§Ã£o AraucÃ¡ria', 'ASP', 28, '2016-09-30'),
(29, 'SETI', 'ASP', 1, '2016-09-30'),
(30, 'ASP', 'CPC', 31, '2016-10-14');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
