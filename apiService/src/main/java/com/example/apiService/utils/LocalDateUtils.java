package com.example.apiService.utils;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class LocalDateUtils {
    private static final DateTimeFormatter BASIC_DATE_TIME_FORMAT = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");

    private LocalDateUtils() {
    }

    /**
     * 將LocalDate轉換成字串，格式為yyyyMMdd
     * @param localDate
     * @return
     */
    public static String formatLocalDate(LocalDate localDate) {
        if (localDate == null) {
            return "";
        }

        return localDate.format(DateTimeFormatter.BASIC_ISO_DATE).toString();
    }

    /**
     * 將LocalDateTime轉換成字串，格式為yyyyMMddHHmmss
     * @param localDateTime
     * @return
     */
    public static String formatLocalDateTime(LocalDateTime localDateTime) {
        if (localDateTime == null) {
            return "";
        }

        return localDateTime.format(BASIC_DATE_TIME_FORMAT).toString();
    }

}
