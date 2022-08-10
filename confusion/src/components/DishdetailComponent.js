import React, {Component} from "react";
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle} from 'reactstrap';


class DishDetail extends Component{
    constructor(props) {
        super(props);

        this.state ={
            selectDishDetail: this.props.dsdetail
        };

    }
    renderDish(dish){
        if( dish == null){
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

    renderComments(comments) {
        if (comments == null) {
            return (<div></div>);
        }
         const value = comments.map(comment => {
             return(
                     <CardBody key={comment.id}>
                         <CardText>{comment.comment}</CardText>
                         <CardText>--{comment.author}, {comment.date}</CardText>
                     </CardBody>

                    )
         })
        return (
            <div className="col-12 col-md-5 m-1">

                <Card>
                    <CardTitle>Comments</CardTitle>
                    {value}
                </Card>

            </div>
        )
    }

    render() {
        const dish = this.props.dish
        if (dish == null) {
            return (<div></div>);
        }
        const dishItem = this.renderDish(dish)
        const dishComments = this.renderComments(dish.comments)
        return (
            <div className="row">
                {dishItem}
                {dishComments}
            </div>
        );


    }
}
export default DishDetail;