
import React from 'react';
import JobList from './JobList.jsx';


import client from '../../api/client';
import follow from '../../api/follow';
import when from 'when';

const root = 'api';

export default class JobApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
        }
    }

    loadFromServer (pageSize,rel) {
        follow(client,root,[
            {rel:rel,params:{size:pageSize}}
        ]).then(entityCollection => {
            return client({
                method:'GET',
                path:entityCollection.entity._links.profile.href,
                headers:{'Accept':'application/schema+json'}
            }).then(schema => {
                this.schema = schema.entity;
                this.links = entityCollection.entity._links;
                return entityCollection;
            });
        }).then(entityCollection => {
            this.links = entityCollection.entity._links;
            this.setState({totalPages:entityCollection.entity.page.totalPages});
            return entityCollection.entity._embedded[rel].map(entity =>
                client({
                    method:'GET',
                    path:entity._links.self.href
                }));
        }).then(entityPromises => {
            return when.all(entityPromises);
        }).done(data => {
            this.setState({
                data: data,
                attributes: Object.keys(this.schema.properties),
                pageSize: pageSize,
                links: this.links
            });
        });
    }

    componentDidMount() {
        this.loadFromServer(20,'jobs');


    }

    render(){
        return (
            <JobList data={ this.state.data }/>
        )
    }
}