const mongoose = require('mongoose');

const umkmSchema = new mongoose.Schema({
  nama_umkm: { type: String, required: true },
  kecamatan: { type: String, required: true },
  kelurahan: { type: String, required: true },
  jenis_usaha: { type: String, required: true },
  alamat: { type: String, required: true }
});

const UMKM = mongoose.model('UMKM', umkmSchema);

module.exports = UMKM;
