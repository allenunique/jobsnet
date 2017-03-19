/**
 * Created by Allen on 2017/3/19.
 */

import client from '../api/client';
import follow from '../api/follow';
import when from 'when';

const root = '/api';

var entityUtils = {
    //从服务器获取数据（users，字段名称，分页内容）
    loadFromServer (pageSize) {
        // console.log("hello world");
        follow(client,root,[
            {rel:'users',params:{size:pageSize}}
        ]).then(userCollection => {
            return client({
                method:'GET',
                path:userCollection.entity._links.profile.href,
                headers:{'Accept':'application/schema+json'}
            }).then(schema => {
                this.schema = schema.entity;
                this.links = userCollection.entity._links;
                return userCollection;
            });
        }).then(userCollection => {
            this.links = userCollection.entity._links;
            this.setState({totalPages:userCollection.entity.page.totalPages});
            return userCollection.entity._embedded.users.map(user =>
                client({
                    method:'GET',
                    path:user._links.self.href
                }));
        }).then(userPromises => {
            return when.all(userPromises);
        }).done(users => {
            this.setState({
                users: users,
                attributes: Object.keys(this.schema.properties),
                pageSize: pageSize,
                links: this.links
            });
        });
    },

    onDelete(user) {
    client({method: 'DELETE', path: user.entity._links.self.href});
},

    onCreate(newUser) {
    follow(client, root, ['users']).then(response => {
        return client({
            method: 'POST',
            path: response.entity._links.self.href,
            entity: newUser,
            headers: {'Content-Type': 'application/json'}
        })
    });
},

    onUpdate(user, updatedUser) {
    client({
        method: 'PUT',
        path: user.entity._links.self.href,
        entity: updatedUser,
        headers: {
            'Content-Type': 'application/json',
            'If-Match': user.headers.Etag
        }
    }).done(response => {
        // this.loadFromServer(this.state.pageSize);
    }, response => {
        if (response.status.code === 412) {
            alert('DENIED: Unable to update ' +
                user.entity._links.self.href + '. Your copy is stale.');
        }
    });
}
};
export default entityUtils;
