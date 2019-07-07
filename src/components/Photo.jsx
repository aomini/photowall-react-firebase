import React from "react";
import StringHelpers from "./../helpers/StringHelpers";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Photo = props => {
  const { photo, onRemovePost } = props;
  return (
    <figure className="figure">
      <Link to={"/single/" + photo.id}>
        <img className="photo" src={photo.imageLink} alt={photo.description} />
      </Link>
      <figcaption>
        <p>{StringHelpers._capitalizeFirstLetter(photo.description)}</p>
      </figcaption>
      <div className="button-container">
        <button
          className="removeBtn"
          onClick={() => {
            onRemovePost(photo.id);
            props.redirectBack && props.history.push("/");
          }}
        >
          Remove
        </button>
        <Link to={"/single/" + photo.id} className="button">
          <div className="comment-count">
            <div className="speech-bubble" />
            {props.comments[photo.id] ? props.comments[photo.id].length : 0}
          </div>
        </Link>
      </div>
    </figure>
  );
};

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
  onRemovePost: PropTypes.func
};

export default Photo;
