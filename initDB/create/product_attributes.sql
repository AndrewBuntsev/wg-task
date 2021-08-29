CREATE TABLE `wg`.`product_attributes` (
  `productId` INT NOT NULL,
  `attributeName` VARCHAR(45) NOT NULL,
  `value` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`productId`, `attributeName`),
  INDEX `FK_productAttribute_attribute_idx` (`attributeName` ASC),
  CONSTRAINT `FK_product_attribute_product`
    FOREIGN KEY (`productId`)
    REFERENCES `wg`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_product_attribute_attribute`
    FOREIGN KEY (`attributeName`)
    REFERENCES `wg`.`attributes` (`name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
