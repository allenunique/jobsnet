package oy.jobsnet.api.job;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import oy.jobsnet.api.company.Company;

import javax.persistence.*;

/**
 * Created by Allen on 2017/3/29.
 */
@Data
@Entity
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    public Job(){

    }



    public Job(String name,String type, String detail, Company company) {
        this.name = name;
        this.type = type;
        this.detail = detail;
        this.company = company;
    }

    private String type;
    private String detail;

    @ManyToOne
    private Company company;

    @Version @JsonIgnore
    private Long version;
}
