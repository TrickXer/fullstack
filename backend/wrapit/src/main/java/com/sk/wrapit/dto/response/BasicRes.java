package com.sk.wrapit.dto.response;

import java.util.List;

import io.jsonwebtoken.lang.Collections;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BasicRes<T> {
    private String message;

    @Builder.Default
    private List<T> dataList = Collections.emptyList();
    private T data;
}
