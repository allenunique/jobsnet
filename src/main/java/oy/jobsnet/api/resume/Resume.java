package oy.jobsnet.api.resume;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import oy.jobsnet.api.user.User;

import javax.persistence.*;

/**
 * Created by Allen on 2017/3/18.
 */
@Data
@Entity
public class Resume {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    //必须有无参的构造函数
    public Resume() {

    }

    public Resume(String title, String detail, User user) {
        this.user = user;
        this.title = title;
        this.detail = detail;
    }

    @ManyToOne
    private User user;

    public void setUser(User user) {
        this.user = user;
    }

    private String title;

    private String detail;

    @Version @JsonIgnore
    private Long version;

}
