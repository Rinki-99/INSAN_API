var dbConn = require('../../config/db.config');

var Cotisation = function(cotisation){
    this.Montant_cotise     =   cotisation.Montant_cotise;
    this.Trimestre          =   cotisation.Trimestre;
    this.Annee              =   cotisation.Annee;
    this.Membre             =   cotisation.Membre;
}

// get all cotisations
Cotisation.getAllCotisations = (result) => {
    dbConn.query('SELECT * FROM Cotisation', (err, res) => {

        if(err){
            console.log('Error while fetching cotisations', err);
            result(null, err);
        }
        else{
            console.log('Cotisations fetched successfully!');
            result(null, res);
        }
    })
}

//create new Cotisation
Cotisation.createCotisation = (cotisationReqData, result) =>{
    dbConn.query('INSERT INTO Cotisation SET ? ' , cotisationReqData, (err, res) => {
        if(err){
            console.log('Error while inserting data');
            result(null,  err);
        }
        else{
            console.log('Cotisation created successfully');
            result(null, res)
        }
    })

}

// get Cotisation by ID from DB
Cotisation.getCotisationByID = (id, result)=>{
    dbConn.query('SELECT * FROM Cotisation WHERE ID_Cotisation=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching Cotisation by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

module.exports = Cotisation;