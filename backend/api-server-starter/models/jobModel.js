const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  salary: { type: String, required: true },
  company: {
    name: { type: String, required: true },
    description: { type: String, required: true },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String, required: true }
  }
});

// Ensure virtual fields are serialized
jobSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});
//virtuals: true
//return virtual properties when document is converted to JSON

//transform: (doc, ret) => { ... } is a function that modifies the output
//when a document is converted to JSON using toJSON() or JSON.stringify().

//ret.id = ret._id; creates a new id property on the output object,
//copying the value from the MongoDB-specific _id field.

//delete ret._id; removes the original _id property from the output,
//so only id remains.

//delete ret.__v; removes the __v property,
//which is used internally by Mongoose for versioning and is usually not needed by API consumers.

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;

