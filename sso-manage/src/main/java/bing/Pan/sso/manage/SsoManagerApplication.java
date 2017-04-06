package bing.Pan.sso.manage;


import bing.Pan.sso.service.config.dynamicDataSource.DynamicDataSourceRegister;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.alibaba.fastjson.support.config.FastJsonConfig;
import com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;
import org.springframework.http.converter.HttpMessageConverter;

import java.util.concurrent.TimeUnit;

/**
 * @crea :Created by intelliJ IDEA 16.1.1 .
 * @auth :bing.Pan 15923508369@163.com .
 * @date :2017/1/16 20:02
 * @desc :
 */
@SpringBootApplication
@ComponentScan(value = "bing.Pan")
@Import({DynamicDataSourceRegister.class})
public class SsoManagerApplication {

    /**
     * 配置 Spring boot session失效时间
     * @return
     */
    @Bean
    public EmbeddedServletContainerCustomizer embeddedServletContainerCustomizer() {
        return new EmbeddedServletContainerCustomizer() {
            @Override
            public void customize(ConfigurableEmbeddedServletContainer container) {
                container.setSessionTimeout(30, TimeUnit.MINUTES);
            }
        };
    }

    public static void main(String[] args) {

        SpringApplication.run(SsoManagerApplication.class, args);

    }
}
