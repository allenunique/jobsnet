package oy.jobsnet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import oy.jobsnet.api.company.Company;
import oy.jobsnet.api.company.CompanyRepository;
import oy.jobsnet.api.job.Job;
import oy.jobsnet.api.job.JobRepository;
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
    private final CompanyRepository companys;
    private final JobRepository jobs;

    @Autowired
    public DatabaseLoader(UserRepository users, ResumeRepository resumes, CompanyRepository companys, JobRepository jobs) {
        this.users = users;
        this.resumes = resumes;
        this.companys = companys;
        this.jobs = jobs;
    }


    @Override
    public void run(String... strings) throws Exception {
        Company tencent = new Company("腾讯公司");
        companys.save(tencent);
        Company ali = new Company("阿里巴巴");
        companys.save(ali);

        User greg = this.users.save(new User("greg", "turnquist",
                "ROLE_USER"));
        User root = this.users.save(new User("root", "root",
                "ROLE_USER"));
        User oliver = this.users.save(new User("oliver", "gierke",
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


        jobs.save(new Job("java工程师", "编程", "硕士文凭及其以上", tencent));
        jobs.save(new Job("项目经理", "管理", "博士文凭及其以上", tencent));
        jobs.save(new Job("销售总监", "管理", "本科文凭及其以上", ali));
        jobs.save(new Job("文档编辑", "文员", "本科文凭及其以上", ali));

        SecurityContextHolder.clearContext();
    }
}
