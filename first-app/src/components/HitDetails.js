import React, {Component} from 'react';
import axios from "axios";
import HitItem from "./HitItem";

class HitDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            hit:null
        }
    }
    componentDidMount() {
      this.getHits(this.props.match.params.id);
    }
    getHits(id) {
        let url = "https://pixabay.com/api/?key=16270916-7fd1c2437e3c2b04ff57ec979&id="+id;
        axios.get(url).then((res) => {
            let totalP=(res.data.totalHits%this.state.pageSize===0)
                ?res.data.totalHits/this.state.pageSize:1+res.data.totalHits/this.state.pageSize;
            this.setState({
                hit:res.data.hits[0]
            })
        }).catch((error) => {
            console.log(error);
        });
    }
    render() {
        if (this.state.hit!=null)
        return (
               <HitItem hit={this.state.hit} details={true}/>
        );
        else {
            return <div>Not found</div>
        }
    }
}

export default HitDetails;
