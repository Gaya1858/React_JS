import React, {Component} from "react";
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import {Link} from 'react-router-dom';

    function RenderDish({dish}){
         return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                         <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                         </CardBody>
                    </Card>
                </div>
            );
    }

    function RenderComments({comments}) {
        if (comments != null)
             return(
                   <div className="col-12 col-md-5 m-1">
                        <h3>Comments</h3>
                        <ul className="list-unstyled">
                            {comments.map((comment)=>{
                                return(
                                    <li key={comment.id}>
                                        <p>{comment.comment}</p>
                                        <p>--{comment.author}, {new Intl.DateTimeFormat('en-us',
                                {year: 'numeric', month: 'short',day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                    </li>
                                );
                            })}

                        </ul>

                    </div>
             );
    }

    const DishDetail = (props)=>{
        if (props.dish != null)
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
            );
        else
            return(<div></div>);
    }

export default DishDetail;