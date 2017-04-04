package oy.jobsnet.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Allen on 2017/3/11.
 */
@Controller
public class HomeController {
    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }

    @RequestMapping(value = "/jobs")
    public String jobs() {
        return "index";
    }

    @RequestMapping(value = "/jobsDetail")
    public String jobDetail() {
        return "index";
    }

    @RequestMapping(value = "/sendResume")
    public String sendResume() {
        return "index";
    }


    @RequestMapping(value = "/companies")
    public String companies() {
        return "index";
    }

}
