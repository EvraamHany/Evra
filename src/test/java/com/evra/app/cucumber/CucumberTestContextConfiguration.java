package com.evra.app.cucumber;

import com.evra.app.EvraApp;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.web.WebAppConfiguration;

@CucumberContextConfiguration
@SpringBootTest(classes = EvraApp.class)
@WebAppConfiguration
public class CucumberTestContextConfiguration {}
