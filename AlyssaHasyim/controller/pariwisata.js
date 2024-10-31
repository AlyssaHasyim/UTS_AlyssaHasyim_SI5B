const pariwisata = require("../model/buku");

const createPariwisata(req,res)=>{
    const pariwisata = new pariwisata({
        namaWisata: req.body.namaWisata,
        Kota: req.body.Kota
    });

    buku.save().then((createdPariwisata)=>{
        res.status(201).json({
            message : "Data berhasil disimpan",
            bookId : createdPariwisata._id
        });
    });
};