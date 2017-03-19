package oy.jobsnet.api.resume;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

/**
 * Created by Allen on 2017/3/18.
 *
 */
@PreAuthorize("hasRole('ROLE_USER')")
public interface ResumeRepository extends CrudRepository<Resume,Long> {
    @Override
    @PreAuthorize("#resume?.user==null or #resume?.user.name==authentication?.name")
    Resume save(@Param("resume") Resume resume);

    @Override
    @PreAuthorize("#resumeRepository?.findOne(#id).user.name==authentication?.name")
    void delete(@Param("id") Long id);

    @Override
    @PreAuthorize("#resume?.user==authentication?.name")
    void delete(@Param("resume") Resume resume);
}
