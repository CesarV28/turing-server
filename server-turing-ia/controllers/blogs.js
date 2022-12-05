import { response, request } from 'express';

import { Blog } from '../models/blog.js'

const blogsGet = async(req = request, res = response) => {

    try {
        const blogs = await Blog.findAll();

        res.status(200).json( {
            msg: 'Get API - Blogs',
            blogs
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Internal server error, conctat with the administrator.'
        })
    }
}

const blogsGetById = async(req = request, res = response) => {

    const { id } = req.params;
    
    try {
        const blog = await Blog.findOne({
            where: {
                id: id
            }
        });
    
        if( !blog ){
            return res.status(404).json({
                ok: false,
                msg: `Blog con el id ${id}, no existe en la base de datos`
            }); 
        }
    
    
        res.json( {
            msg: 'Get API - One',
            blog
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Internal server error, conctat with the administrator.'
        });
    }
}



const blogsPost = async(req, res) => {

    try {
        const blog = req.body;

        await Blog.create( {...blog } );

        res.status(201).json( {
            msg: 'Blog created',
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Internal server error, conctat with the administrator.'
        });
    }
}

const blogsPut = async(req, res) => {

    const { id } = req.params;
    const data = req.body;

    try {
        const blog = await Blog.findOne({
            where: {
                id: id
            }
        });
    
        if( !blog ){
            return res.status(404).json({
                ok: false,
                msg: `Blog con el id ${id}, no existe en la base de datos`
            }); 
        }

        blog.update({ ...data }, {
            where: {
              id
            }
          });
    
        res.json( {
            msg: `Blog con el id ${id} ACTUALIZADO`,
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Internal server error, conctat with the administrator.'
        });
    }
}

const blogsDelete = async(req, res) => {

    const { id } = req.params;

    try {

        const blog = await Blog.findOne({
            where: {
                id: id
            }
        });
    
        if( !blog ){
            return res.status(404).json({
                ok: false,
                msg: `Blog con el id ${id}, no existe en la base de datos`
            }); 
        }

        await Blog.destroy({
            where: {
              id
            }
          });
    
        res.json( {
            msg: `Blog con el id ${id} ELIMINADO`
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Internal server error, conctat with the administrator.'
        });
    }
}


export {
    blogsGet,
    blogsGetById,
    blogsPut,
    blogsPost,
    blogsDelete,
}