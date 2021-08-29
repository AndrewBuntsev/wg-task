-- create table
CREATE TABLE `wg`.`attribute_types` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

-- add data
INSERT INTO `wg`.`attribute_types` (`id`, `name`) VALUES ('1', 'boolean');
INSERT INTO `wg`.`attribute_types` (`id`, `name`) VALUES ('2', 'decimal');
