import React from "react";

const AddSessionForm = props => {
    console.log(props.start_date)
    return <div className="main_container">
        <h1>Add Session</h1>
        <form
            id="Session-form"
            name="Session-form"
            onSubmit={props.onSubmit}
            className="wrapper-col"
        >
            <label htmlFor="Title">Title</label>
            <input
                onChange={props.onChange}
                value={props.title}
                id="title"
                name="session[title]"
                type="text"
                className="m-4"
            />
            
            <label htmlFor="start_date">Date and time</label>
            <input
                onChange={props.onChange}
                value={props.start_date}
                id="start_date"
                name="session[start_date]"
                type="datetime-local"
                className="m-4"
            />

            <label htmlFor="price_point">Price</label>
            <input
                onChange={props.onChange}
                value={props.price_point}
                id="price_point"
                name="session[price_point]"
                type="number"
                className="m-4"
            />
            
            <button className="button" name="Submit" type="submit" >
				Add Session
			</button>
        </form>
    </div>
};

export default AddSessionForm;
