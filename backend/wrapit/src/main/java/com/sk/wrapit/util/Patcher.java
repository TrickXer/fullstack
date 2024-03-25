package com.sk.wrapit.util;

import java.lang.reflect.Field;

import org.springframework.stereotype.Component;

@Component
public class Patcher {
    public static <T> T patcher(T existed, T updated) throws IllegalArgumentException, IllegalAccessException {
        Field[] fields = existed.getClass().getDeclaredFields();

        for (Field field : fields) {
            field.setAccessible(true);

            Object value = field.get(updated);
            if (value != null) {
                System.out.println(field + " " + value);
                field.set(existed, value);
            }

            field.setAccessible(false);
        }

        return existed;
    }
}
