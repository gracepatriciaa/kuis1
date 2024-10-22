const UMKM = require('../models/umkmModel');

exports.createUMKM = async (req, res) => {
  const { nama_umkm, kecamatan, kelurahan, jenis_usaha, alamat } = req.body;

  try {
    const newUMKM = new UMKM({
      nama_umkm,
      kecamatan,
      kelurahan,
      jenis_usaha,
      alamat
    });

    const savedUMKM = await newUMKM.save();
    res.status(201).json({ message: 'UMKM berhasil ditambahkan', data: savedUMKM });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan', error });
  }
};
