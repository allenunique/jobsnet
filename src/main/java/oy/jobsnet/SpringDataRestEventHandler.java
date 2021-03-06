/*
 * Copyright 2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package oy.jobsnet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import oy.jobsnet.api.resume.Resume;
import oy.jobsnet.api.user.User;
import oy.jobsnet.api.user.UserRepository;

/**
 * @author Greg Turnquist
 */
// tag::code[]
@Component
@RepositoryEventHandler(Resume.class)
public class SpringDataRestEventHandler {

	private final UserRepository userRepository;

	@Autowired
	public SpringDataRestEventHandler(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@HandleBeforeCreate
	public void applyUserInformationUsingSecurityContext(Resume resume) {

		String name = SecurityContextHolder.getContext().getAuthentication().getName();
		User user = this.userRepository.findByName(name);
		if (user == null) {
			User newUser = new User();
			newUser.setName(name);
			newUser.setRoles(new String[]{"ROLE_USER"});
			user = this.userRepository.save(newUser);
		}
		resume.setUser(user);
	}
}
// end::code[]
