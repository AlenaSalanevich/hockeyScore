package com.epam.hockey.score.api.configuration;

import com.fasterxml.classmate.TypeResolver;
import com.google.common.base.Predicates;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.WildcardType;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import static springfox.documentation.schema.AlternateTypeRules.newRule;

@Configuration
public class WebConfiguration {

    @Bean
    public Docket workflowApiDocket() {
        TypeResolver typeResolver = new TypeResolver();
        return new Docket(DocumentationType.SWAGGER_2).groupName("TransportApplication")
                .useDefaultResponseMessages(false)
                .apiInfo(
                        new ApiInfoBuilder().title("Transport Application")
                                .version("1.0")
                                .build())
                .alternateTypeRules(newRule(
                        typeResolver.resolve(Collection.class,
                                WildcardType.class),
                        typeResolver.resolve(List.class,
                                WildcardType.class)))
                .select()
                .paths(Predicates.not(PathSelectors.regex("/error")))
                .apis(RequestHandlerSelectors.any())
                .build()
                .genericModelSubstitutes(Optional.class);
    }
}
