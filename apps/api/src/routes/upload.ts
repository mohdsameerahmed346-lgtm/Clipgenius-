import express from 'express'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    return res.json({
      success: true,
      message: 'Upload received'
    })
  } catch (error) {
    return res.status(500).json({
      success: false
    })
  }
})

export default router
