import React from 'react';
import {Link} from "react-router-dom";

function HitItem(props) {
    return (
        <div className="container">
            <div className="row" key={props.hit.id}>
                <div className={props.details === false ? 'col-md-4 m-2' : 'm-2'}>
                    <div className="card mb-2">
                        <div className="card-header">
                            {props.details === false ? props.hit.tags : 'Details'} |
                            {props.hit.webformatWidth} x {props.hit.webformatHeight}</div>
                        <div className="card-body">
                            {
                                (props.details === false) ?
                                    <img src={props.hit.webformatURL} alt="hit" height={200} width={300}
                                         className="img-card img-thumbnail img-responsive"/> :
                                    <img src={props.hit.largeImageURL} alt="hit"
                                         className="img-thumbnail img-responsive"/>

                            }
                        </div>
                        {
                            (props.details === false) ?
                                <div>
                                    <Link className="btn btn-primary m-2" to={'/hitDetails/' + props.hit.id}>Hit
                                        Details</Link>
                                </div> :
                                <div className="row p-2">
                                    <div className="col-auto">
                                        <img src={props.hit.userImageURL} alt="name"
                                             className="img-thumbnail img-responsive"/>
                                    </div>

                                    <div className="col">
                                        <ul className="nav nav-pills">
                                            <li className="list-group-item">
                                                View: <strong>{props.hit.views}</strong>
                                            </li>
                                            <li className="list-group-item">
                                                Comments: <strong>{props.hit.comments}</strong>
                                            </li>
                                            <li className="list-group-item">
                                                Downloads <strong>{props.hit.downloads}</strong>
                                            </li>
                                            <li className="list-group-item">
                                                Favorites <strong>{props.hit.favorites}</strong>
                                            </li>
                                            <li className="list-group-item">
                                                Likes <strong>{props.hit.likes}</strong>
                                            </li>
                                        </ul>
                                        <div>
                                            <Link className="btn btn-danger m-2" to={"/gallery"}>Go back</Link>
                                        </div>
                                    </div>
                                </div>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HitItem;
