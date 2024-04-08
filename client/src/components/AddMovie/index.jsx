import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_MOVIE } from "../../utils/mutations";

const AddMovie = ({ onClose }) => {
  const [formState, setFormState] = useState({
    title: "",
    director: "",
    genre: "",
    releaseDate: "",
    duration: "",
    description: "",
    streamingLink: "",
    trailerLink: "",
    posterUrl: "",
  });
  const [addMovie] = useMutation(ADD_MOVIE);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      title,
      director,
      genre,
      releaseDate,
      description,
      streamingLink,
      trailerLink,
      posterUrl,
    } = formState;
    const duration = parseInt(formState.duration, 10); // Convert to integer

    try {
      await addMovie({
        variables: {
          title,
          director,
          genre,
          releaseDate,
          duration,
          description,
          streamingLink,
          trailerLink,
          posterUrl,
        },
      });
      setIsSuccessful(true); // Set success state to true
      setTimeout(() => {
        onClose(); // Close the form after 2 seconds
        setIsSuccessful(false); // Reset success message
      }, 2000);
    } catch (e) {
      console.error("Error:", e);
    }
  };

  return (
    <div className="add-movie-modal">
      <div className="add-movie-content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Title"
            value={formState.title}
            required
          />
          <input
            type="text"
            name="director"
            onChange={handleChange}
            placeholder="Director"
            value={formState.director}
            required
          />
          <input
            type="text"
            name="genre"
            onChange={handleChange}
            placeholder="Genre (comma separated)"
            value={formState.genre}
            required
          />
          <input
            type="date"
            name="releaseDate"
            onChange={handleChange}
            placeholder="Release Date"
            value={formState.releaseDate}
            required
          />
          <input
            type="number"
            name="duration"
            onChange={handleChange}
            placeholder="Duration (in minutes)"
            value={formState.duration}
            required
          />
          <textarea
            name="description"
            onChange={handleChange}
            placeholder="Description"
            value={formState.description}
            required
          ></textarea>
          <input
            type="text"
            name="streamingLink"
            onChange={handleChange}
            placeholder="Streaming Link"
            value={formState.streamingLink}
            required
          />
          <input
            type="text"
            name="trailerLink"
            onChange={handleChange}
            placeholder="Trailer Link"
            value={formState.trailerLink}
            required
          />
          <input
            type="text"
            name="posterUrl"
            onChange={handleChange}
            placeholder="Poster URL"
            value={formState.posterUrl}
            required
          />
          <button type="submit">Add Movie</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddMovie;
