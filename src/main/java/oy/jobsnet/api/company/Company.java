package oy.jobsnet.api.company;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

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

    private @Version @JsonIgnore Long version;


}
