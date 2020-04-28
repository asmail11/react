import React, {Component} from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skillValue: '',
            title: 'Keep you smile',
            contact: {
                name: "Issam drmas",
                profile: "images/profile.png",
                email: "drmas@gmail.com"
            },
            skills: [
                {id: 1, skill: 'Softowre'},
                {id: 2, skill: 'Ui Design'},
                {id: 3, skill: 'Machine Learing'},
                {id: 4, skill: 'Java'},
            ]
        }
    }

    setSkill = (e) => {
        this.setState({
            skillValue: e.target.value
        });
    };
    addSkill = (e) => {
        e.preventDefault();
        let skill = {
            id: [...this.state.skills].pop().id + 1,
            skill: this.state.skillValue
        };
        this.setState({
            skills: [...this.state.skills, skill]
        })
    };
    onDelete = (e) => {
        let index = this.state.skills.indexOf(e);
        let listSkills = [...this.state.skills];
        listSkills.splice(index, 1);
        this.setState({
            skills: listSkills
        });
    };

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <div>
                            <label>
                                <strong>{this.state.title}</strong>
                            </label>
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col col-auto">
                            <img width={100} src={this.state.contact.profile} alt="name"/>
                        </div>
                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">{this.state.contact.name}</li>
                                <li className="list-group-item">{this.state.contact.email}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card m-2">
                    <div className="card-header">
                        Skills: {this.state.skillValue}
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.addSkill} className="form-group">
                            <div className="row mb-2">
                                <div className="col">
                                    <input type="text" name="skill"
                                           value={this.state.skillValue}
                                           onChange={this.setSkill}
                                           className="form-control p-1"
                                           placeholder="New Skill"/>
                                </div>
                                <div className="col col-auto">
                                    <button className="btn btn-primary">Add</button>
                                </div>
                            </div>
                        </form>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Skill</th>
                            </tr>
                            </thead>
                            {
                                this.state.skills.map((skill, index) => {
                                    return <tbody key={index}>

                                    <tr>
                                        <td>{skill.id}</td>
                                        <td>{skill.skill}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => this.onDelete(skill)}>X
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                    }

                                )
                            }
                        </table>
                    </div>

                </div>
            </div>
        );
    }
}

// About.propTypes = {};

export default About;
