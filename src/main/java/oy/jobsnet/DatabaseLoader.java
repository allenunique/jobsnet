package oy.jobsnet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import oy.jobsnet.api.resume.Resume;
import oy.jobsnet.api.resume.ResumeRepository;
import oy.jobsnet.api.user.User;
import oy.jobsnet.api.user.UserRepository;

/**
 * Created by Allen on 2017/3/11.
 *
 */
@Component
public class DatabaseLoader implements CommandLineRunner {
    private final UserRepository users;
    private final ResumeRepository resumes;


    @Autowired
    public DatabaseLoader(UserRepository users, ResumeRepository resumes) {
        this.users = users;
        this.resumes = resumes;
    }


    @Override
    public void run(String... strings) throws Exception {

        User greg = this.users.save(new User("greg", "turnquist",
                "ROLE_USER"));
        User oliver = this.users.save(new User("oliver", "gierke",
                "ROLE_USER"));
        this.users.save(new User("王锐", "gierke",
                "ROLE_USER"));
        this.users.save(new User("杨崇卓", "gierke",
                "ROLE_USER"));
        this.users.save(new User("小明", "gierke",
                "ROLE_USER"));
        this.users.save(new User("张兴晨", "gierke",
                "ROLE_USER"));

        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken("greg", "doesn't matter",
                        AuthorityUtils.createAuthorityList("ROLE_USER")));

        this.resumes.save(new Resume("-Frodo", "ring bearer", greg));
        this.resumes.save(new Resume("-Bilbo", "burglar", greg));
        this.resumes.save(new Resume("-Gandalf","wizard", greg));

        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken("oliver", "doesn't matter",
                        AuthorityUtils.createAuthorityList("ROLE_USER")));

        this.resumes.save(new Resume("-Samwise", "Gamgee", oliver));
        this.resumes.save(new Resume("-Merry", "Brandybuck", oliver));
        this.resumes.save(new Resume("-Peregrin", "Took", oliver));

        SecurityContextHolder.clearContext();
    }
}
