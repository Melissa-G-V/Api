import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/dbconection.js';
import { Admin } from '../models/Admin.js'

export const Colaborator = sequelize.define('Colaborator', {
    idcolab: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true,
        validate: {
            isInt: true,
            len: [11,11]
          }
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isPhoneNumber(value) {
                const regx = /\([0-9]{2}\)9?[0-9]{4}-[0-9]{4}/
                if (regx.test(value) == false) {
                  throw new Error('Wrong Phone Number!');
                }
              }
        }
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        //posivel futura validação de senhas forte ou fraca
    },

  });

  Colaborator.belongsTo(Admin,{
    constraints: true,
    foreignKey: 'id_adm'
  })
Admin.hasMany(Colaborator,{
    foreignKey: 'id_adm'
})