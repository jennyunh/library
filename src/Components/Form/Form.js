import "./Form.css";

const Form = (props) => {



return (
    <>
      {props.formOpen && (
        <form onSubmit={(e) => props.submitHandler(e)}>
          <b id="close" onClick={props.closeHandler}>
            x
          </b>
          <br />
          <div id="inputs">
            <input
              type="text"
              onChange={(e) => props.titleHandler(e)}
              value={props.title}
              placeholder="Title"
            />
            <br />
            <input
              type="text"
              onChange={(e) => props.authorHandler(e)}
              value={props.author}
              placeholder="Author"
            />
            <br />
            <textarea
              onChange={(e) => props.descriptionHandler(e)}
              value={props.description}
              placeholder="Please add comments or a book description here."
              rows="4"
              cols="50"
            ></textarea>
            <br />
            <label>
              Have you read it?{" "}
              <input type="checkbox" id="checkbox" onClick={props.readHandler} />{" "}
            </label>
            <br />
            <br />
            <input id="submitButton" type="submit" value="Submit" />
          </div>
        </form>
      )}
    </>
  );
};

export default Form;
