package oy.jobsnet.api.user;


import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;

/**
 * Created by Allen on 2017/3/11.
 *
 */
public interface UserRepository extends PagingAndSortingRepository<User, Long> {
    User findByName(String name);
}
