import { Op } from "sequelize";
import { Admin } from '../models/Admin.js'

export const adminIndex = async (req, res) => {
    try {
      const admin = await Admin.findAll();
      res.status(200).json(admin)
    } catch (error) {
      res.status(400).send(error)
    }
  }


  export const adminCreate = async (req, res) => {
    const { name, password, email, phone, cpf } = req.body
  
    if (!name || !password || !email || !phone || !cpf) {
      res.status(400).json({ id: 0, msg: "Error... forgot to input some value" })
      return
    }
    try {
      const admin = await Admin.create({
         name, password, email, phone, cpf
      });
      res.status(201).json(admin)
    } catch (error) {
      res.status(400).send(error)
    }
  }

  export const adminUpdate = async (req, res) => {
    const { idadm } = req.params
    const { name, password, email, phone, cpf } = req.body
    if (!name || !password || !email || !phone || !cpf) {
        res.status(400).json({ id: 0, msg: "Error... forgot to input some value" })
        return
      }
    try {
      const admin = await Admin.update({
         name, password, email, phone, cpf
      }, {
        where: { idadm }
      });
      res.status(200).json(admin)
    } catch (error) {
      res.status(400).send(error)
    }
  }

  export const adminDestroy = async (req, res) => {
    const { idadm } = req.params
    try {
      const admin = await Admin.destroy({
        where: { idadm }
      });
      res.status(200).json(admin)
    } catch (error) {
      res.status(400).send(error)
    }
  }