import React, {Component} from "react";
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle} from 'reactstrap';


    function RenderDish({dish}){
        if(dish == null){
            return(<div></div>);
        }
        else{
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
    }

    function RenderComments({comments}) {
        if (comments == null) {
            return (<div></div>);
        }
         const value = comments.map(comment => {
             return(
                     <li key={comment.id}>
                         <p>{comment.comment}</p>
                         <p>--{comment.author}, {new Intl.DateTimeFormat('en-us',
                             {year: 'numeric', month: 'short',day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                     </li>

                    )
         })
        return (
            <div className="col-12 col-md-5 m-1">
                <h3>Comments</h3>
                <ul className="list-unstyled">

                    {value}
                </ul>

            </div>
        )
    }

    const DishDetail = (props)=>{
        if (props.dish == null) {
            return (<div></div>);
        }
        const dishItem = <RenderDish dish={props.dish}/>
        const dishComments = <RenderComments comments={props.dish.comments}/>

        return (
            <div className="container">
            <div className="row">
                    {dishItem}
                {dishComments}
            </div>
            </div>
        );


    }

export default DishDetail;