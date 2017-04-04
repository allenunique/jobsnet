package oy.jobsnet.api.company;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import oy.jobsnet.api.job.Job;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Allen on 2017/3/18.
 *
 */
@Data
@Entity
public class Company {

    public Company() {
    }

    public Company(String name) {
        this.name = name;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String website;

    private String address;

    private String info;

    @OneToMany(mappedBy="company")
    private List<Job> jobs = new ArrayList<>();

    private @Version @JsonIgnore Long version;


}
