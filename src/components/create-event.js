import React, { Component } from 'react';
import DatePicker from 'react-date-picker';


export default class CreateEvent extends Component {
    constructor(props) {
        // always call super when defining constructor of subclass (React Component)
        super(props);

        this.onChangeEvent = this.onChangeEvent.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePicture = this.onChangePicture.bind(this);
        this.onChangeVideo = this.onChangeVideo.bind(this);
        this.onChangeArticle = this.onChangeArticle.bind(this);

        this.state = {
            event: '',
            date: new Date(),
            description: '', 
            picture: '',
            video: '',
            article: '',
        }
    }

    // // React lifecycle method - automatically called before anything loads
    // componentDidMount() {
    //     this.setState(

    //     )
    // }

    // Set state when event is changed
    onChangeEvent(e) {
        this.setState({
            event: e.target.value            
        });
    }

    // Set state when date is changed
    onChangeDate(date) {
        this.setState({
            date: date           
        });
    }

    // Set state when description is changed
    onChangeDescription(e) {
        this.setState({
            description: e.target.value            
        });
    }

    // Set state when picture is changed
    onChangePicture(e) {
        this.setState({
            picture: e.target.value            
        });
    }

    // Set state when video is changed
    onChangeVideo(e) {
        this.setState({
            video: e.target.value            
        });
    }

    // Set state when article is changed
    onChangeArticle(e) {
        this.setState({
            article: e.target.value            
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const myEvent = {
            event: this.state.event,
            date: this.state.date,
            description: this.state.description,
            picture: this.state.picture,
            video: this.state.video,
            article: this.state.article
        }
        console.log(myEvent);

        window.location = '/';
    }
 
    render() {
        return (
            <div>
                <h3>Create New Event</h3>
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label>Event Name: </label>
                        <input type = "text"
                            required
                            className = "form-control"
                            value = {this.state.event}
                            onChange = {this.onChangeEvent}
                            />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                            selected = {this.state.date}
                            onChange = {this.onChangeDate}
                            />
                        </div>
                   </div>
                   <div className="form-group">
                        <label>Description: </label>
                        <input type = "text"
                            required
                            className = "form-control"
                            value = {this.state.description}
                            onChange = {this.onChangeDescription}
                            />
                    </div>
                    <div className="form-group">
                        <label>Picture Link: </label>
                        <input type = "text"
                            className = "form-control"
                            value = {this.state.picture}
                            onChange = {this.onChangePicture}
                            />
                    </div>
                    <div className="form-group">
                        <label>Video Link: </label>
                        <input type = "text"
                            className = "form-control"
                            value = {this.state.video}
                            onChange = {this.onChangeVideo}
                            />
                    </div>
                    <div className="form-group">
                        <label>Article Link: </label>
                        <input type = "text"
                            className = "form-control"
                            value = {this.state.article}
                            onChange = {this.onChangeArticle}
                            />
                    </div>

                    <div className = "form-group">
                        <input type = "submit" value = "Create Event" className = "btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}