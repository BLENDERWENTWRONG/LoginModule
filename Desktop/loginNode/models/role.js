const mongoose = require('mongoose');
const Schema =mongoose.Schema

const roleSchema = new mongoose.Schema({
  roleName: {
    type: String,
  }
}

  );

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
