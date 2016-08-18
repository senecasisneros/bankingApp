const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  trans: { type: String, required: true },
  amount: { type: String, required: true },
  type: { type: Boolean, default: false },
  createdAt: { type: Date, required: true, default: Date.now }
});

transactionSchema.statics.type = function(id, cb) {
  this.findById(id, (err, transaction) => {
    if(err) return cb(err);
    transaction.type = !transaction.type;
    transaction.save(cb);
  })
};




const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
