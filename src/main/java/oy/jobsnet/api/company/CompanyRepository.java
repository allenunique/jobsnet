package oy.jobsnet.api.company;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by Allen on 2017/3/18.
 */
public interface CompanyRepository extends PagingAndSortingRepository<Company,Long> {
}
