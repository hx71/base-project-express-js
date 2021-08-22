module.exports = {
    "up": "CREATE TABLE `options` ( `id` bigint unsigned NOT NULL AUTO_INCREMENT, `code` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL, `value` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL, `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL, `sort` int DEFAULT NULL, `is_active` enum('1','0') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1', `created_at` timestamp NULL DEFAULT NULL, `updated_at` timestamp NULL DEFAULT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;",
    "down": "DROP TABLE IF EXISTS `option`;"
}