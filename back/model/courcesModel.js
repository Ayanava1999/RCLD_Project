const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  softwares: {
    type: String,
    required: true
  },
  benefit: {
    type: String,
    required: true
  },
  originalPrice: {
    type: Number,
    required: true
  },
  discountPrice: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^data:image\/(png|jpeg|jpg);base64,/.test(v);
      },
      message: props => `${props.value} is not a valid Base64 encoded image string!`
    }
  }
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
