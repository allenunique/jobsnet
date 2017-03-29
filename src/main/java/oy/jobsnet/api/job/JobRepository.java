package oy.jobsnet.api.job;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by Allen on 2017/3/29.
 */
public interface JobRepository extends PagingAndSortingRepository<Job,Long> {

}
