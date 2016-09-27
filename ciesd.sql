-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Máquina: 127.0.0.1
-- Data de Criação: 27-Set-2016 às 16:29
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

-- --------------------------------------------------------

--
-- Estrutura da tabela `documento`
--

CREATE TABLE IF NOT EXISTS `documento` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador do Documento',
  `titulo` varchar(256) NOT NULL COMMENT 'Título do Documento',
  `tipoDocumento` int(11) NOT NULL COMMENT 'Chave estrangeira do Tipo do Documento',
  `dataCadastro` date NOT NULL COMMENT 'Data de cadastro do Documento',
  `qtdTramites` int(11) NOT NULL DEFAULT '0' COMMENT 'Quantidade de tramitações do documento',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=29 ;

--
-- Extraindo dados da tabela `documento`
--

INSERT INTO `documento` (`id`, `titulo`, `tipoDocumento`, `dataCadastro`, `qtdTramites`) VALUES
(1, 'OfÃ­cio nÂº 035/2016 - ASP/CPC', 1, '2016-09-01', 3),
(9, 'Outro tÃ­tulo de documento', 3, '2016-08-25', 3),
(14, 'Novo documento cadastrado pelo site', 2, '2016-01-01', 0),
(24, 'Teste de tipo de Documento', 4, '2016-02-01', 0),
(25, 'OfÃ­cio nÂº 70/2015 AraucÃ¡ria', 3, '2016-09-13', 0),
(26, 'Titulo do documento', 1, '2015-10-10', 0),
(27, 'Novo documento', 2, '2016-09-20', 0),
(28, 'Mais um Documento', 5, '2016-09-27', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
