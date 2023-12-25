import mongoose, { Schema } from "mongoose";

const movieSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => new mongoose.Types.ObjectId(),
  },
  title: String,
  description: String,
  videoUrl: String,
  thumbnailUrl: String,
  genre: String,
  duration: String,
});

const MovieModel =
  mongoose.models.MovieModel || mongoose.model("Movie", movieSchema);

export default MovieModel;
