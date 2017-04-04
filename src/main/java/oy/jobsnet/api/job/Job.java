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

    public Job(String name, Integer salary, String address, String degree, Company company) {
        this.name = name;
        this.salary = salary;
        this.address = address;
        this.degree = degree;
        this.company = company;
    }

    private Integer salary;

    private String address;

    private String degree;

    @ManyToOne
    private Company company;

    @Version @JsonIgnore
    private Long version;
}
