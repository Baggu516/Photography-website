const mongoose = require("mongoose");

const objectSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: false,
    },
    caption: {
      type: String,
      required: false,
    },
    imgurl: {
      type: String,
      required: false,
    },
    likes: {
      type: Number,
      required: false,
      default: 0,
    },
    comments: {
      type: [
        {
          ref_Username:String,
          text: String,
        }
      ],
      required: false,
      default: [],
    },
    likedPersons:{
        type:[String],
        required:false,
        default:[]
    },
    checked:{
      type:Boolean,
      default:false
    }
  },
  {
    timestamps: true,
  }
);
const subimageModal = mongoose.model("subimageModal", objectSchema);
module.exports = { subimageModal, objectSchema };
