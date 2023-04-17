import { Router } from "express"
import { adminCreate, adminDestroy, adminIndex, adminUpdate } from "./controllers/adminController.js"
import { colabCreate, colabIndex } from "./controllers/colaboratorController.js"


const router = Router()
// admin routes
router.get('/admin/index', adminIndex)
.post('/admin/create', adminCreate)
.post('/admin/update/:idadm', adminUpdate)
.delete('/admin/destroy/:idadm', adminDestroy)

// colaborator
.get('/colab/index', colabIndex)
.post('/colab/post', colabCreate)



//medication

//prontuary
      
export default router