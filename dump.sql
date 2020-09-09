use people;

CREATE TABLE IF NOT EXISTS `people` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `person_name` varchar(255) NOT NULL COMMENT 'person name',
  `person_surname` varchar(255) NOT NULL COMMENT 'person surname',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='people test table' AUTO_INCREMENT=3 ;

INSERT INTO people ( person_name, person_surname ) VALUES ( 'Pirmenis', 'Pavardenis' );
