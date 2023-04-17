import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/dbconection.js';

export const Admin = sequelize.define('Admin', {
    idadm: {
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