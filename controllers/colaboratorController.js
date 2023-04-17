import { Op } from "sequelize";
import { Admin } from '../models/Admin.js'
import { Colaborator } from '../models/Colaborator.js'


export const colabIndex = async (req, res) => {
    try {
      const colab = await Colaborator.findAll();
      res.status(200).json(colab)
    } catch (error) {
      res.status(400).send(error)
    }
  }


  export const colabCreate = async (req, res) => {
    const { name, password, email, phone, cpf, id_adm } = req.body
  
    if (!name || !password || !email || !phone || !cpf || !id_adm) {
      res.status(400).json({ id: 0, msg: "Error... forgot to input some value" })
      return
    }
    try {
      const admin = await Colaborator.create({
         name, password, email, phone, cpf, id_adm
      });
      res.status(201).json(admin)
    } catch (error) {
      res.status(400).send(error)
    }
  }