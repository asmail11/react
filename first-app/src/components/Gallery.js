import React, {Component} from 'react';
import axios from 'axios';
import HitItem from "./HitItem";
import SearchForm from "./SearchForm";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits:[],
            currentPage:1,
            pageSize:10,
            currentKeyword:'',
            totalPages:1,
            pages:[]
        }
    }
    componentDidMount() {
     //   this.getHits();
    }

    getHits(keyword) {
        let url = "https://pixabay.com/api/?key=16270916-7fd1c2437e3c2b04ff57ec979&q="
            +keyword+"&page="+this.state.currentPage+"&per_page="+this.state.pageSize;
        axios.get(url).then((res) => {
            let totalP=(res.data.totalHits%this.state.pageSize===0)
                ?res.data.totalHits/this.state.pageSize:1+Math.floor(res.data.totalHits/this.state.pageSize);
            this.setState({
                hits:res.data.hits,
                totalPages:totalP,
                pages:new Array(totalP).fill(0),
                currentKeyword:keyword
            })
        }).catch((error) => {
            console.log(error);
        });
    }

    searchSomething=(keyword)=> {
        this.setState({
            currentPage:1,
            pages:[]
        }, () => {
            this.getHits(keyword);
        });
    };
    goToPage=(i)=>{
        this.setState({
            currentPage:i
        }, ()=> {
            this.getHits(this.state.currentKeyword);
        });

    };
     render() {
        return (
            <div>
                <div>
                <ul className="nav nav-pills">
                    {
                        this.state.pages.map((value,index)=>
                            <li key={index}>
                                <button className={this.state.currentPage===index+1?'btn btn-danger':'btn btn-link'}
                                        onClick={()=>this.goToPage(index+1)}>{index+1}</button>
                            </li>
                        )
                    }
                </ul>
                </div>
                <SearchForm onSearch={this.searchSomething}/>
                <div className="row">
                    {
                        this.state.hits.map((hit,i)=>
                            <HitItem hit={hit} key={i} details={false}/>
                        )
                    }
                </div>
            </div>
        );
    }
}

Gallery.propTypes = {};

export default Gallery;
