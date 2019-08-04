import React, { Component } from 'react';


export default class CreateStaff extends Component {
    constructor(props) {
        // always call super when defining constructor of subclass (React Component)
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangePhoto = this.onChangePhoto.bind(this);
        this.onChangeLinkedin = this.onChangeLinkedin.bind(this);
        this.onChangeTwitter = this.onChangeTwitter.bind(this);
        this.onChangeInstagram = this.onChangeInstagram.bind(this);
        this.onChangeGithub = this.onChangeGithub.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            title: '',
            photo: '',
            linkedin: '', 
            twitter: '',
            instagram: '',
            github: '',
        }
    }

    // Set state when name is changed
    onChangeName(e) {
        this.setState({
            name: e.target.value            
        });
    }

    // Set state when name is changed
    onChangeTitle(e) {
        this.setState({
            title: e.target.value            
        });
    }

     // Set state when photo is changed
     onChangePhoto(e) {
        this.setState({
            photo: e.target.value            
        });
    }

    // Set state when linkedin is changed
    onChangeLinkedin(e) {
        this.setState({
            linkedin: e.target.value            
        });
    }

    // Set state when twitter is changed
    onChangeTwitter(e) {
        this.setState({
            twitter: e.target.value            
        });
    }

    // Set state when instagram is changed
    onChangeInstagram(e) {
        this.setState({
            instagram: e.target.value            
        });
    }

    // Set state when github is changed
    onChangeGithub(e) {
        this.setState({
            github: e.target.value            
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const staff = {
            name: this.state.name,
            title: this.state.title,
            photo: this.state.photo,
            linkedin: this.state.linkedin,
            twitter: this.state.twitter,
            instagram: this.state.instagram,
            github: this.state.github,
        }
        console.log(staff);

        this.setState({
            name: '',
            title: '',
            photo: '',
            linkedin: '', 
            twitter: '',
            instagram: '',
            github: '',
        })
    }

    render() {
        return (
            <div>
                <h3>Add New Staff Member</h3>
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label>Full Name: </label>
                        <input type = "text"
                            required
                            className = "form-control"
                            value = {this.state.name}
                            onChange = {this.onChangeName}
                            />
                    </div>
                    
                    <div className="form-group">
                        <label>Title: </label>
                        <input type = "text"
                            required
                            className = "form-control"
                            value = {this.state.title}
                            onChange = {this.onChangeTitle}
                            />
                    </div>
                    <div className="form-group">
                        <label>Photo Link: </label>
                        <input type = "text"
                            required
                            className = "form-control"
                            value = {this.state.photo}
                            onChange = {this.onChangePhoto}
                            />
                    </div>
                   <div className="form-group">
                        <label>LinkedIn: </label>
                        <input type = "text"
                            className = "form-control"
                            value = {this.state.linkedin}
                            onChange = {this.onChangeLinkedin}
                            />
                    </div>
                    <div className="form-group">
                        <label>Twitter: </label>
                        <input type = "text"
                            className = "form-control"
                            value = {this.state.twitter}
                            onChange = {this.onChangeTwitter}
                            />
                    </div>
                    <div className="form-group">
                        <label>Instagram: </label>
                        <input type = "text"
                            className = "form-control"
                            value = {this.state.instagram}
                            onChange = {this.onChangeInstagram}
                            />
                    </div>
                    <div className="form-group">
                        <label>Github: </label>
                        <input type = "text"
                            className = "form-control"
                            value = {this.state.github}
                            onChange = {this.onChangeGithub}
                            />
                    </div>

                    <div className = "form-group">
                        <input type = "submit" value = "Add Member" className = "btn btn-primary" />
                    </div>
                    
                </form>
            </div>
        )
    }
}
