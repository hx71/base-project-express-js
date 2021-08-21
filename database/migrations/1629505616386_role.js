module.exports = {
    "up": "CREATE TABLE role (  id bigint unsigned NOT NULL AUTO_INCREMENT, role varchar(1) COLLATE utf8mb4_unicode_ci NOT NULL,  name varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,  created_at timestamp NULL DEFAULT NULL,  updated_at timestamp NULL DEFAULT NULL, active enum('1','0') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',  created_by int DEFAULT NULL,  updated_by int DEFAULT NULL,  PRIMARY KEY (id),  UNIQUE KEY role_role_unique (role)) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;",
    "down": "DROP TABLE IF EXISTS `role`;"
}