import {Contact} from '../models/contact.js';

const contactGet = async( req, res ) => {

    try {
        const contacts = await Contact.findAll();

        res.status(200).json( {
            msg: 'Get API - contacts',
            contacts
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Internal server error, conctat with the administrator.'
        })
    }
}

const contactGetById = async( req, res ) => {

    const { id } = req.params;
    
    try {
        const contact = await Contact.findOne({
            where: {
                id: id
            }
        });
    
        if( !contact ){
            return res.status(404).json({
                ok: false,
                msg: `Blog con el id ${id}, no existe en la base de datos`
            }); 
        }
    
    
        res.json( {
            msg: 'Get API - One',
            contact
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Internal server error, conctat with the administrator.'
        });
    }
}


const contactPut = async( req, res ) => {

    const { id } = req.params;
    const data = req.body;

    try {
        const contact = await Contact.findOne({
            where: {
                id: id
            }
        });
    
        if( !contact ){
            return res.status(404).json({
                ok: false,
                msg: `Contacto con el id ${id}, no existe en la base de datos`
            }); 
        }

        contact.update({ ...data }, {
            where: {
              id
            }
          });
    
        res.status(201).json( {
            msg: `Contacto con el id ${id} ACTUALIZADO`,
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Internal server error, conctat with the administrator.'
        });
    }
}

const contactPost = async( req, res ) => {

    try {
        const contact = req.body;

        await Contact.create( {...contact } );

        res.status(201).json( {
            msg: 'Contact created',
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Internal server error, conctat with the administrator.'
        });
    }
}

const contactDelete = async( req, res ) => {

    const { id } = req.params;

    try {

        const contact = await Contact.findOne({
            where: {
                id: id
            }
        });
    
        if( !contact ){
            return res.status(404).json({
                ok: false,
                msg: `Contato con el id ${id}, no existe en la base de datos`
            }); 
        }

        await Contact.destroy({
            where: {
              id
            }
          });
    
        res.json( {
            msg: `Contact con el id ${id} ELIMINADO`
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Internal server error, conctat with the administrator.'
        });
    }
}


export {
    contactGet, 
    contactPut, 
    contactPost, 
    contactDelete, 
    contactGetById
}