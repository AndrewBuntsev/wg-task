-- create table
CREATE TABLE `wg`.`attributes` (
  `type` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`name`),
  INDEX `FK_attribute_type_idx` (`type` ASC),
  CONSTRAINT `FK_attribute_type`
    FOREIGN KEY (`type`)
    REFERENCES `wg`.`attribute_types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- add data
INSERT INTO `wg`.`attributes` (`type`, `name`) VALUES ('1', 'fantastic');
INSERT INTO `wg`.`attributes` (`type`, `name`) VALUES ('2', 'rating');