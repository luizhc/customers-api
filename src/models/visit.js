const mongoose = require("mongoose");

const VisitSchema = new mongoose.Schema({
  ip: {
    type: String,
  },
  isp: {
    type: String,
  },
  org: {
    type: String,
  },
  hostname: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  postal_code: {
    type: String,
  },
  city: {
    type: String,
  },
  country_code: {
    type: String,
  },
  country_name: {
    type: String,
  },
  continent_code: {
    type: String,
  },
  continent_name: {
    type: String,
  },
  country_code: {
    type: String,
  },
  region: {
    type: String,
  },
  district: {
    type: String,
  },
  timezone_name: {
    type: String,
  },
  connection_type: {
    type: String,
  },
  asn_number: {
    type: Number,
  },
  asn_org: {
    type: String,
  },
  asn: {
    type: String,
  },
  currency_code: {
    type: String,
  },
  currency_name: {
    type: String,
  },
  success: {
    type: Boolean,
  },
  premium: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
  },
});

const Visit = mongoose.model("Visit", VisitSchema);

module.exports = Visit;
