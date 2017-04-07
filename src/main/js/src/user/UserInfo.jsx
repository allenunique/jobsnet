import React from 'react';
import {
    Grid,
    Col,
    Row,
    Button,
    FormGroup,
    Form,
    Radio,
    Checkbox,
    FormControl,
    ControlLabel,
} from 'react-bootstrap';

export default class UserInfo extends React.Component {
    render(){
        return(
            <Form >
                <FormGroup controlId="name">
                        <ControlLabel>你的名字</ControlLabel>
                        {' '}
                        <FormControl type="text" placeholder="你的名字" />
                </FormGroup>
                {' '}
                <FormGroup controlId="idCard">
                    <ControlLabel>身份证号码</ControlLabel>
                    {' '}
                    <FormControl type="text" placeholder="身份证号码" />
                </FormGroup>
                {' '}

                <FormGroup controlId="address">
                    <ControlLabel>常驻地址</ControlLabel>
                    {' '}
                    <FormControl type="text" placeholder="常驻地址" />
                </FormGroup>
                {' '}
                <FormGroup controlId="political">
                    <ControlLabel>政治面貌</ControlLabel>
                    {' '}
                    <FormControl type="text" placeholder="政治面貌" />
                </FormGroup>
                {' '}
                <FormGroup controlId="graduate">
                    <ControlLabel>毕业院校</ControlLabel>
                    {''}
                    <FormControl type="text" placeholder="毕业院校" />
                </FormGroup>
                {' '}
                <FormGroup controlId="grade">
                    <ControlLabel>学历</ControlLabel>
                    {' '}
                    <FormControl type="text" placeholder="学历" />
                </FormGroup>
                {' '}
                <FormGroup controlId="email">
                    <ControlLabel>Email</ControlLabel>
                    {' '}
                    <FormControl type="email" placeholder="jane.doe@example.com" />
                </FormGroup>
                <FormGroup>
                    <Col >
                        <Button type="submit">
                            更新我的信息
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }

}
