import mongoose from "mongoose";
const countriesSchema = mongoose.Schema({
  name: String,
  code: String,
});
export default mongoose.model("countries", countriesSchema);
