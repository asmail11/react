import React, {Component} from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            keyWordValue:'',
        }
    }
    setKeyword=(e) => {
        this.setState({
            keyWordValue: e.target.value
        })
    };
    doSearch=(e)=> {
        e.preventDefault();
       this.props.onSearch(this.state.keyWordValue);
    };
    render() {
        return (
            <form onSubmit={this.doSearch}>
                <div className="row m-2 p-2">

                    <div className="col">
                        <input type="text"
                               className="form-control"
                               value={this.state.keyWordValue}
                               onChange={this.setKeyword}/>
                    </div>
                    <div className="col-auto"><button className="btn btn-secondary" type="submit">Search</button></div>
                </div>
            </form>
        );
    }
}

export default SearchForm;
