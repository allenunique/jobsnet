package oy.jobsnet.api.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.ToString;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;

/**
 * Created by Allen on 2017/3/11.
 *
 */
@Data
@ToString(exclude = "password")
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String[] roles;
    public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

    @JsonIgnore
    private String password;

    public String getPassword() {
        return password;
    }

    private void setPassword(String password) {
        this.password = PASSWORD_ENCODER.encode(password);
    }

    public void setRoles(String[] roles) {
        this.roles = roles;
    }

    public String[] getRoles() {
        return roles;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public User() {

    }

    public User(String name) {
        this.name = name;
    }

    public User(String name, String password, String... roles) {
        this.roles = roles;
        this.setPassword(password);
        this.name = name;
    }

    public Long getId(){
        return id;
    }

    private String name;

    private @Version @JsonIgnore Long version;


}
